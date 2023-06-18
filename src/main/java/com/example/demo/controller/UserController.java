package com.example.demo.controller;

import com.example.demo.domain.*;
import com.example.demo.response.*;
import com.example.demo.service.*;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.*;

@RestController
public class UserController {

    private ResponseService responseService;
    private UserService userService;
    private DevelopmentStackService developmentStackService;
    private ProjectService projectService;
    private InvitationService invitationService;
    private QuestionnaireService questionnaireService;
    private MemberService memberService;
//    public UserController(UserService userService){
//        this.userService = userService;
//    }

    public UserController(ResponseService responseService, UserService userService, DevelopmentStackService developmentStackService, ProjectService projectService, InvitationService invitationService, MemberService memberService, QuestionnaireService questionnaireService) {
        this.responseService = responseService;
        this.userService = userService;
        this.developmentStackService = developmentStackService;
        this.projectService = projectService;
        this.invitationService = invitationService;
        this.memberService = memberService;
        this.questionnaireService = questionnaireService;
    }

    @PostMapping("/user/join")
    public SingleResponse<User> insert(@RequestBody User user){
        List<DevelopmentStack> developmentStacks = user.getDevelopmentStacks();
        User saved_user = userService.join(user);
        for(DevelopmentStack stack : developmentStacks){
            stack.setUser(saved_user);
            developmentStackService.insert(stack);
        }
        CommonResponse commonResponse = new CommonResponse();
        if(saved_user!=null){
            commonResponse.setStatus("SUCCESS");
            commonResponse.setMessage(null);
        } else{
            commonResponse.setStatus("FAILED");
            commonResponse.setMessage("회원가입에 실패했습니다.");
        }

        return responseService.getSingleResponse(commonResponse, saved_user);
    }

    @PostMapping("/user/login") //ok
    public AdminResponse login(HttpServletRequest request, @RequestBody Map<String, String> loginData){
        String id = loginData.get("id");
        String pw = loginData.get("password");
        System.out.println(id);
        System.out.println(pw);
        int login_result = userService.login(id, pw);
        System.out.println(login_result);
        CommonResponse commonResponse = new CommonResponse();
        HttpSession session = request.getSession();
        int isAdmin = -1;
        if(login_result==1) {
            commonResponse.setStatus("SUCCESS");
            commonResponse.setMessage(null);
            session.setAttribute("id", id);
            System.out.println(session.getAttribute("id"));
            //id로 isAdmin가져오기 메소드 구현해올게
            //왔어.
            isAdmin = userService.findIsAdminById(id);
        }
        else {
            commonResponse.setStatus("FAILED");
            commonResponse.setMessage("로그인 실패");
        }
        return responseService.getAdminResponse(commonResponse, isAdmin);
    }

    @PostMapping("/user/logout")
    public CommonResponse logout(HttpServletRequest request){
        HttpSession session = request.getSession();
        Object user = session.getAttribute("id");
        CommonResponse commonResponse = new CommonResponse();
        if(user!=null) {
            session.invalidate();
            commonResponse.setStatus("SUCCESS");
            commonResponse.setMessage(null);
        }else{
            commonResponse.setStatus("FAILED");
            commonResponse.setMessage("세션이 이미 비어있음");
        }
        return commonResponse;
    }

    @GetMapping("/user/join/questionnaire") //ok
    public<T> SingleResponse<Questionnaire> question(@RequestBody String developmentStack)throws JsonProcessingException{
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(developmentStack);
        String value = jsonNode.get("developmentStack").asText();
        Questionnaire questionnaire = userService.findQuestionnaire(value);
        CommonResponse commonResponse = new CommonResponse();
        if(value!=null){
            commonResponse.setStatus("SUCCESS");
            commonResponse.setMessage(null);
        }else{
            commonResponse.setStatus("FAILED");
            commonResponse.setMessage("질문지 가져오기 실패");
        }
        return responseService.getSingleResponse(commonResponse, questionnaire);
    }

    @GetMapping("/user/info")
    public<T> SingleResponse<User> findUserInfo(HttpServletRequest request) {
        String user_id = userService.findSessionId(request);
        User user = userService.findUserInfo(user_id);
        CommonResponse commonResponse = new CommonResponse();
        if(user!=null){
            commonResponse.setStatus("SUCCESS");
            commonResponse.setMessage(null);
        }else{
            commonResponse.setStatus("FAILED");
            commonResponse.setMessage("회원 정보 가져오기 실패");
        }
        return responseService.getSingleResponse(commonResponse, user);
    }

    @GetMapping("/user/project/manage/recommend")
    public<T> ListResponse<User> recommendUser(int project_id){
        int require_member_num = 0;
        List<User> temp_list = null;
        List<ProjectStack> projectStacks = projectService.findProjectStackByProjectId(project_id);
        for(ProjectStack stack : projectStacks){
            require_member_num += stack.getRequire_member();
            List<User> list = userService.findUsersByStack(stack.getDevelopment_stack()); //일단 스택에 맞는 유저들만 뽑아옴
            for(User user : list){
                if(userService.findGradeByUserId(user)==stack.getRequire_grade()){
                    temp_list.add(user);
                }
            }
        }

        List<User> temp_list2 = null;

        if(temp_list.size()<=require_member_num){
            for(int i=0;i<temp_list.size();i++){
                temp_list2.add(temp_list.get(i));
            }
        }

        while(temp_list.size()>require_member_num*2){
            List<Integer> numbers = new ArrayList<>();
            for (int i = 1; i <= temp_list.size(); i++) {
                numbers.add(i);
            }

            List<Integer> randomNumbers = new ArrayList<>();
            Random random = new Random();
            for (int i = 0; i < require_member_num; i++) {
                int index = random.nextInt(numbers.size());
                randomNumbers.add(numbers.remove(index));
            }
            for(Integer num : randomNumbers){
                temp_list2.add(temp_list.get(num));
            }
        }
        CommonResponse commonResponse = new CommonResponse();
        commonResponse.setStatus("SUCCESS");
        commonResponse.setMessage(null);

        List<Map<List<User>,String>> recommended_user_list = null;

        return responseService.getListResponse(commonResponse,temp_list2);
    }

    @GetMapping("/user/project/manage/list")
    public<T> ListResponse<Project> manageProjectList(HttpServletRequest request){
        String user_id = userService.findSessionId(request);
        CommonResponse commonResponse = new CommonResponse();
        List<Project> list = userService.findManageProjectList(user_id);
        if(list!=null){
            commonResponse.setStatus("SUCCESS");
            commonResponse.setMessage(null);
        }else{
            commonResponse.setStatus("FAILED");
            commonResponse.setMessage("리스트 출력 실패");
        }
        return responseService.getListResponse(commonResponse, list);
    }

    @GetMapping("/user/project/manage/invite")
    public CommonResponse invite(int project_id, Long user_id){
        Project project = projectService.findByProjectId(project_id);
        User user = userService.getById(user_id.intValue());
        invitationService.insert(project, user);
        CommonResponse commonResponse = new CommonResponse();
        commonResponse.setStatus("SUCCESS");
        commonResponse.setMessage("초대 성공");
        return commonResponse;
    }

    @GetMapping("/user/project/accept")
    public CommonResponse accept(HttpServletRequest request, int project_id, String status){
        String user_id = userService.findSessionId(request);
        User user = userService.findUserInfo(user_id);
        Project project = projectService.findByProjectId(project_id);
        CommonResponse commonResponse = new CommonResponse();
        //멤버테이블에 저장
        if(status.equals("APPROVE")){
            Member member = new Member();
            member.setUser(user);
            member.setProject(project);
            member.setPosition("MEMBER");
            memberService.insert(member);
            //알림테이블의 초대상태를 "초대됨" 에서 "수락" 으로 변경
            invitationService.updateState(user_id);
            commonResponse.setStatus("SUCCESS");
            commonResponse.setMessage("프로젝트 초대 수락됨");
        }else{
            commonResponse.setStatus("SUCCESS");
            commonResponse.setMessage("프로젝트 초대 거절됨");
        }
       return commonResponse;
    }
}
