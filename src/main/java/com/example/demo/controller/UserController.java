package com.example.demo.controller;

import com.example.demo.domain.*;
import com.example.demo.response.*;
import com.example.demo.service.*;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

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

    @PostMapping("/user/join") //ok
    public SingleResponse<User> insert(@RequestBody ObjectNode objectNode)throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        //System.out.println("user.getNickaname() : " + user.getNickname());
        User user = mapper.treeToValue(objectNode.get("user"), User.class);
        User result_user = userService.join(user);
        DevelopmentStack developmentStack = mapper.treeToValue(objectNode.get("developmentStack"), DevelopmentStack.class);
        CommonResponse commonResponse = new CommonResponse();
        developmentStack.setUser(user);
        if(result_user!=null){
            developmentStackService.insert(developmentStack);
            commonResponse.setStatus("SUCCESS");
            commonResponse.setMessage(null);
        } else{
            commonResponse.setStatus("FAILED");
            commonResponse.setMessage("회원가입에 실패했습니다.");
        }

        return responseService.getSingleResponse(commonResponse, result_user);
    }

    @PostMapping("/user/login") //ok
    public SessionResponse login(HttpServletRequest request, @RequestBody Map<String, String> loginData){
        String id = loginData.get("id");
        String pw = loginData.get("pw");
        int login_result = userService.login(id, pw);
        System.out.println(login_result);
        CommonResponse commonResponse = new CommonResponse();
        HttpSession session = request.getSession();
        if(login_result==1) {
            commonResponse.setStatus("SUCCESS");
            commonResponse.setMessage(null);
            session.setAttribute("id", id);
            System.out.println(session.getAttribute("id"));
        }
        else {
            commonResponse.setStatus("FAILED");
            commonResponse.setMessage("로그인 실패");
        }
        return responseService.getSessionResponse(commonResponse, session);
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
        System.out.println("A");
        String user_id = userService.findSessionId(request);
        System.out.println("B");
        User user = userService.findUserInfo(user_id);
        System.out.println("C");
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


    @GetMapping("/user/project/manage/list")
    public<T> ListResponse<Project> manageProjectList(HttpServletRequest request){
        //지금 여기!! 세션을 가져올 것인지 토큰을 가져올 것인지 결정해야함!! 찾아보고 올게.
        //세션으로 일단 가.
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
    public CommonResponse invite(Long project_id, Long user_id){
        Project project = projectService.findByProjectId(project_id);
        User user = userService.getById(user_id.intValue());
        invitationService.insert(project, user);
        CommonResponse commonResponse = new CommonResponse();
        commonResponse.setStatus("SUCCESS");
        commonResponse.setMessage("초대 성공");
        return commonResponse;
    }

    @GetMapping("/user/project/accept")
    public CommonResponse accept(HttpServletRequest request, Long project_id, String status){
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
