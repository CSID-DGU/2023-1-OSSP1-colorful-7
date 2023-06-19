package com.example.demo.controller;

import com.example.demo.domain.*;
import com.example.demo.response.*;
import com.example.demo.service.*;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Random;

@RestController
public class UserController {

    private ResponseService responseService;
    private UserService userService;
    private DevelopmentStackService developmentStackService;
    private ProjectService projectService;
    private InvitationService invitationService;
    private QuestionnaireService questionnaireService;
    private MemberService memberService;
    private ProjectStackService projectStackService;
    @Autowired
    private ApplyService applyService;

    //    public UserController(UserService userService){
//        this.userService = userService;
//    }
    private ProjectLikeService projectLikeService;

    public UserController(ResponseService responseService, ApplyService applyService, UserService userService, DevelopmentStackService developmentStackService, ProjectService projectService, InvitationService invitationService, MemberService memberService, QuestionnaireService questionnaireService) {
        this.responseService = responseService;
        this.userService = userService;
        this.developmentStackService = developmentStackService;
        this.projectService = projectService;
        this.invitationService = invitationService;
        this.memberService = memberService;
        this.questionnaireService = questionnaireService;
        this.applyService = applyService;
        //this.projectStackService = projectService;
    }

    @PostMapping("/user/join")
    public SingleResponse<User> insert(@ModelAttribute User user) {
        List<DevelopmentStack> developmentStacks = user.getDevelopmentStacks();
        User saved_user = userService.join(user);
        for (DevelopmentStack stack : developmentStacks) {
            stack.setUser(saved_user);
            developmentStackService.insert(stack);
        }
        CommonResponse commonResponse = new CommonResponse();
        if (saved_user != null) {
            commonResponse.setStatus("SUCCESS");
            commonResponse.setMessage(null);
        } else {
            commonResponse.setStatus("FAILED");
            commonResponse.setMessage("회원가입에 실패했습니다.");
        }

        return responseService.getSingleResponse(commonResponse, saved_user);
    }

    @PostMapping("/user/login") //ok
    public AdminResponse login(HttpServletRequest request, @ModelAttribute Map<String, String> loginData) {
        String id = loginData.get("id");
        String pw = loginData.get("password");
        System.out.println(id);
        System.out.println(pw);
        int login_result = userService.login(id, pw);
        System.out.println(login_result);
        CommonResponse commonResponse = new CommonResponse();
        HttpSession session = request.getSession();
        int isAdmin = -1;
        if (login_result == 1) {
            commonResponse.setStatus("SUCCESS");
            commonResponse.setMessage(null);
            session.setAttribute("id", id);
            System.out.println(session.getAttribute("id"));
            //id로 isAdmin가져오기 메소드 구현
            isAdmin = userService.findIsAdminById(id);
        } else {
            commonResponse.setStatus("FAILED");
            commonResponse.setMessage("로그인 실패");
        }
        return responseService.getAdminResponse(commonResponse, isAdmin);
    }

    @PostMapping("/user/logout")
    public CommonResponse logout(HttpServletRequest request) {
        HttpSession session = request.getSession();
        Object user = session.getAttribute("id");
        CommonResponse commonResponse = new CommonResponse();
        if (user != null) {
            session.invalidate();
            commonResponse.setStatus("SUCCESS");
            commonResponse.setMessage(null);
        } else {
            commonResponse.setStatus("FAILED");
            commonResponse.setMessage("세션이 이미 비어있음");
        }
        return commonResponse;
    }

    @GetMapping("/user/join/questionnaire") //ok
    public <T> SingleResponse<Questionnaire> question(@ModelAttribute String developmentStack) throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode jsonNode = objectMapper.readTree(developmentStack);
        String value = jsonNode.get("developmentStack").asText();
        Questionnaire questionnaire = userService.findQuestionnaire(value);
        CommonResponse commonResponse = new CommonResponse();
        if (value != null) {
            commonResponse.setStatus("SUCCESS");
            commonResponse.setMessage(null);
        } else {
            commonResponse.setStatus("FAILED");
            commonResponse.setMessage("질문지 가져오기 실패");
        }
        return responseService.getSingleResponse(commonResponse, questionnaire);
    }

    @GetMapping("/user/info")
    public <T> SingleResponse<User> findUserInfo(HttpServletRequest request) {
        String user_id = userService.findSessionId(request);
        User user = userService.findUserInfo(user_id);
        CommonResponse commonResponse = new CommonResponse();
        if (user != null) {
            commonResponse.setStatus("SUCCESS");
            commonResponse.setMessage(null);
        } else {
            commonResponse.setStatus("FAILED");
            commonResponse.setMessage("회원 정보 가져오기 실패");
        }
        return responseService.getSingleResponse(commonResponse, user);
    }

    @GetMapping("/user/project/manage/recommend")
    public <T> ListResponse<User> recommendUser(int project_id) {
        int require_member_num = 0;
        List<User> temp_list = null;
        List<ProjectStack> projectStacks = projectService.findProjectStackByProjectId(project_id);
        for (ProjectStack stack : projectStacks) {
            require_member_num += stack.getRequire_member();
            List<User> list = userService.findUsersByStack(stack.getDevelopment_stack()); //일단 스택에 맞는 유저들만 뽑아옴
            for (User user : list) {
                if (userService.findGradeByUserId(user) == stack.getRequire_grade()) {
                    temp_list.add(user);
                }
            }
        }

        List<User> temp_list2 = null;

        if (temp_list.size() <= require_member_num) {
            for (int i = 0; i < temp_list.size(); i++) {
                temp_list2.add(temp_list.get(i));
            }
        }

        while (temp_list.size() > require_member_num * 2) {
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
            for (Integer num : randomNumbers) {
                temp_list2.add(temp_list.get(num));
            }
        }
        CommonResponse commonResponse = new CommonResponse();
        commonResponse.setStatus("SUCCESS");
        commonResponse.setMessage(null);

        List<Map<List<User>, String>> recommended_user_list = null;

        return responseService.getListResponse(commonResponse, temp_list2);
    }

    @GetMapping("/user/project/manage/list")
    public <T> ListResponse<Project> manageProjectList(HttpServletRequest request) {
        //지금 여기!! 세션을 가져올 것인지 토큰을 가져올 것인지 결정해야함!! 찾아보고 올게.
        //세션으로 일단 가.
        String user_id = userService.findSessionId(request);
        CommonResponse commonResponse = new CommonResponse();
        List<Project> list = userService.findManageProjectList(user_id);
        if (list != null) {
            commonResponse.setStatus("SUCCESS");
            commonResponse.setMessage(null);
        } else {
            commonResponse.setStatus("FAILED");
            commonResponse.setMessage("리스트 출력 실패");
        }
        return responseService.getListResponse(commonResponse, list);
    }

    //여러개의 리스트를 어떻게 한꺼번에 리턴하지? -> 일단 리스트로 하나씩 테스트
    @GetMapping("/user/project/list")
    public <T> ListResponse<Project> findProjectList(HttpServletRequest request) {
        String user_id = userService.findSessionId(request);
        CommonResponse commonResponse = new CommonResponse();
        //List<Project> belongingProjects = userService.findBelongingProjects(user_id);
        List<Project> pendingProjects = applyService.findPendingProjects(user_id);
        //List<Project> likedProjects = projectLikeService.findLikedProjects(user_id);
        //List<Project> endProjects = projectService.findEndProjects(user_id);

        //List<Project> projectLists = new List<>();
        //projectLists.add(beloningProjects);
        //projectLists.add(pendingProjects);
        //projectLists.add(likedProjects);
        //projectLists.add(endProjects);

        if (!pendingProjects.isEmpty()) {
            commonResponse.setStatus("SUCCESS");
            commonResponse.setMessage(null);
        } else {
            commonResponse.setStatus("FAILED");
            commonResponse.setMessage("리스트 출력 실패");
        }

        return responseService.getListResponse(commonResponse, pendingProjects);
    }
    /*
    public ListResponse<List<Project>> findProjectList(HttpServletRequest request) {
        String user_id = userService.findSessionId(request);
        CommonResponse commonResponse = new CommonResponse();
        List<Project> beloningProjects = userService.findBelongingProjects(user_id);
        List<Project> pendingProjects = projectService.findPendingProjects(user_id);
        List<Project> likedProjects = projectLikeService.findLikedProjects(user_id);
        List<Project> endProjects = projectService.findEndProjects(user_id);

        List<List<Project>> projectLists = new ArrayList<>();
        projectLists.add(beloningProjects);
        projectLists.add(pendingProjects);
        projectLists.add(likedProjects);
        projectLists.add(endProjects);

        if (!projectLists.isEmpty()) {
            commonResponse.setStatus("SUCCESS");
            commonResponse.setMessage(null);
        } else {
            commonResponse.setStatus("FAILED");
            commonResponse.setMessage("리스트 출력 실패");
        }

        return responseService.getListResponse(commonResponse, projectLists);
    }
    */

/*
    @GetMapping("user/project/apply/list")
/* user project list로 병합됨
   @GetMapping("user/project/apply/list")
    public List<Project> applyProjectList(HttpServletRequest request) {
        String user_id = userService.findSessionId(request);
        return userService.findApplyProjectList(user_id);
   }*/

    /*user project list로 병합됨
    @GetMapping("/user/project/manage/list")
    public List<Project> manageProjectList(HttpServletRequest request) {
        String user_id = userService.findSessionId(request);
        return userService.findManageProjectList(user_id);
    }

*/
    //SK
    //팀장인 유저가 추천받은 멤버 중에 원하는 유저를 토글(초대/초대취소) 합니다.
    @PostMapping("/user/project/manage/invite")
    public CommonResponse invite(int project_id, Long user_id) {
        Project project = projectService.findByProjectId(project_id);
        User user = userService.getById(user_id.intValue());
        invitationService.insert(project, user);
        CommonResponse commonResponse = new CommonResponse();
        commonResponse.setStatus("SUCCESS");
        commonResponse.setMessage("초대 성공");
        return commonResponse;
    }

    //프론트에서 보내주는 상태에 따라 달라지게 수정해야함!
    //초대받은 유저가 해당 프로젝트를 참여/거절합니다.
    @GetMapping("/user/project/accept")
    public CommonResponse accept(HttpServletRequest request, int project_id, String status) {
        String user_id = userService.findSessionId(request);
        User user = userService.findUserInfo(user_id);
        Project project = projectService.findByProjectId(project_id);
        List<ProjectStack> projectStacks = projectStackService.findStackByProjectId(project_id);

        CommonResponse commonResponse = new CommonResponse();
        //멤버테이블에 저장
        if (status.equals("APPROVE")) {
            Member member = new Member();
            member.setUser(user);
            member.setProject(project);
            member.setPosition("MEMBER");
            memberService.insert(member);
            //알림테이블의 초대상태를 "초대됨" 에서 "수락" 으로 변경
            invitationService.updateState(user_id);
            commonResponse.setStatus("SUCCESS");
            commonResponse.setMessage("프로젝트 초대 수락됨");
        } else {
            commonResponse.setStatus("SUCCESS");
            commonResponse.setMessage("프로젝트 초대 거절됨");
        }
        return commonResponse;
    }

    @PostMapping("/user/project/manage/hire")
    public CommonResponse hire(HttpServletRequest request, @ModelAttribute Map<Integer, String> hireData) {
//
//        int project_id = Integer.parseInt(hireData.get("project_id"));
//        String status = hireData.get("status");
//        int hire_result = userService.login(project_id, status);
//        /*
//        System.out.println(hire_result);
//        CommonResponse commonResponse = new CommonResponse();
//        HttpSession session = request.getSession();
//        if(hire_result==1) {
//            commonResponse.setStatus("SUCCESS");
//            commonResponse.setMessage(null);
//            session.setAttribute("project_id", project_id);
//            System.out.println(session.getAttribute("project_id"));
//        }
//        else {
//            commonResponse.setStatus("FAILED");
//            commonResponse.setMessage("hire 실패");
//        }
//        return responseService.getSessionResponse(commonResponse, session);*/
//        //Project project = projectService.findByProjectId(project_id);
//        String user_id = userService.findSessionId(request);
//        User user = userService.findUserInfo(user_id);
//        int project_id = Integer.parseInt(hireData.get("project_id"));
//        String status = hireData.get("status");
//
//        CommonResponse commonResponse = new CommonResponse();
//        //멤버테이블에 저장
//        if(status.equals("APPROVE")){
//            Member member = new Member();
//            member.setUser(user);
//            member.setProject(project);
//            member.setPosition("MEMBER");
//            memberService.insert(member);
//            //지원테이블의 상태를 "peding" 에서 "BELONG" 으로 변경
//            applyService.updateState(user_id);
//            commonResponse.setStatus("SUCCESS");
//            commonResponse.setMessage("프로젝트 지원 수락됨");
//        }else{
//            commonResponse.setStatus("SUCCESS");
//            commonResponse.setMessage("프로젝트 지원 거절됨");
//        }
        return null;
    }


    //프로젝트 관리페이지에서 팀장에게 유저를 추천해줌
    //프로젝트 id받고 점수, 기술 스택이 무엇인지 파악
    //유저 테이블가서 해당 기술스택이 있는 유저 찾음
    //그중 점수가 가장 가까운 유저 추천

    /*
    @GetMapping("/user/project/manage/recommend")
    public String recommendUser(Long project_id) {
        // 프로젝트 정보 가져오기
        //
        Project project = projectService.findByProjectId(project_id);
        List<ProjectStack> projectStacks = projectStackService.findStackByProjectId(project_id);

        // 프로젝트 스택 정보 저장
        List<String> requiredStacks = new ArrayList<>();
        Map<String, Integer> requiredGrades = new HashMap<>();
        Map<String, Integer> requiredMembers = new HashMap<>();

        for (ProjectStack projectStack : projectStacks) {
            requiredStacks.add(projectStack.getDevelopment_stack());
            requiredGrades.put(projectStack.getDevelopment_stack(), projectStack.getRequire_grade());
            requiredMembers.put(projectStack.getDevelopment_stack(), projectStack.getRequire_grade());
        }

        // 프로젝트 스택과 일치하는 유저(개발스택으로 조회. 유저당 개발스택이
        // ) 조회
        List<DevelopmentStack> matchingUsers = developmentStackService.findUsersByStacks(requiredStacks);

        // 일치하는 유저를 요구인원의 두 배 이상 추출
        List<DevelopmentStack> recommendedUsers = new ArrayList<>();

        for (DevelopmentStack user : matchingUsers) {
            String stack = user.getDevelopment_stack();
            int grade = user.getGrade();
            int member = requiredMembers.get(stack);

            if (grade == requiredGrades.get(stack) && member <= requiredMembers.get(stack)) {
                recommendedUsers.add(user);
                /*
                if (recommendedUsers.size() >= (member * 2)) {
                    break; // 요구인원의 두 배 이상인 유저들만 추출하므로, 추천인원을 초과한 경우 종료
                }
            }
        }

        // 추천된 유저를 정답률과 등급을 기준으로 정렬
        Collections.sort(recommendedUsers, new Comparator<DevelopmentStack>() {
            @Override
            public int compare(DevelopmentStack user1, DevelopmentStack user2) {
                // 등급 비교
                int grade1 = requiredGrades.get(user1.getGrade());
                int grade2 = requiredGrades.get(user2.getGrade());
                int gradeComparison = Integer.compare(grade2, grade1); // 등급이 높은 순으로 정렬

                if (gradeComparison == 0) {
                    // 등급이 같은 경우 정답률 비교
                    double accuracy1 = user1.getScore_percent();
                    double accuracy2 = user2.getScore_percent();
                    return Double.compare(accuracy2, accuracy1); // 정답률이 높은 순으로 정렬
                } else {
                    return gradeComparison;
                }
            }
        });

        // 추천된 유저 정보를 반환하거나 활용할 수 있는 형식으로 가공
        if (!recommendedUsers.isEmpty()) {
            StringBuilder recommendation = new StringBuilder();
            recommendation.append("Recommended users: ");
            for (DevelopmentStack user : recommendedUsers) {
                recommendation.append(user.getName()).append(", ");
            }
            recommendation.delete(recommendation.length() - 2, recommendation.length()); // 마지막 쉼표와 공백 제거
            return recommendation.toString();
        } else {
            return "No recommended user found.";
        }
    }
    */
    //프로젝트 관리페이지에서 팀장에게 지원한 유저 목록을 보여줌
    @GetMapping("/user/project/manage/apply")
    public <T> ListResponse<User> applyUserList(HttpServletRequest request, int project_id) {
        Project project = projectService.findByProjectId(project_id);
//      String user_id = userService.findSessionId(request);
//      User user = userService.findUserInfo(user_id);
        CommonResponse commonResponse = new CommonResponse();
        List<User> list = applyService.findApplyUsers(project_id);
        //findApplyUsers구현하기
        if (list != null) {
            commonResponse.setStatus("SUCCESS");
            commonResponse.setMessage(null);
        } else {
            commonResponse.setStatus("FAILED");
            commonResponse.setMessage("리스트 출력 실패");
        }
        return responseService.getListResponse(commonResponse, list);

    }

    /*
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
*/

    //유저의 알림페이지에서 보여줄 초대받은 프로젝트 리스트 정보들을 가져옵니다.
    @GetMapping("user/project/invite/list")
    public <T> ListResponse<Project> inviteProjectList(HttpServletRequest request) {
        String user_id = userService.findSessionId(request);
        CommonResponse commonResponse = new CommonResponse();
        List<Project> list = invitationService.findInviteProjectList(user_id);

        if (list != null) {
            commonResponse.setStatus("SUCCESS");
            commonResponse.setMessage(null);
        } else {
            commonResponse.setStatus("FAILED");
            commonResponse.setMessage("리스트 출력 실패");
        }
        return responseService.getListResponse(commonResponse, list);
    }
}







