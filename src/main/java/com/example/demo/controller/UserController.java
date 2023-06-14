package com.example.demo.controller;

import com.example.demo.domain.*;
import com.example.demo.service.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;

@RestController
public class UserController {
    private UserService userService;
    private DevelopmentStackService developmentStackService;
    private ProjectService projectService;
    private InvitationService invitationService;
    private MemberService memberService;
    private ProjectStackService projectStackService;

    public UserController(UserService userService){
        this.userService = userService;
    }

    @PostMapping("/user/join")
    public User insert(User user, DevelopmentStack developmentStack){
        User result_user = userService.join(user);
        if(result_user!=null){
            developmentStackService.insert(developmentStack);
        }
        return result_user;
    }

    @PostMapping("/user/login")
    public ModelAndView login(String id, String pw){
        int login_result = userService.login(id, pw);
        ModelAndView mav;
        if(login_result==1) {
            mav = new ModelAndView("/createSession");
        }
        else {
            mav = new ModelAndView("/login");
        }
        return mav;
    }

    @GetMapping("/createSession")
    public ModelAndView createSession(HttpServletRequest request, String id){
        userService.SessionCreate(request,id);
        ModelAndView mav = new ModelAndView("main");
        return mav;
    }

    @GetMapping("/user/join/questionnaire")
    public Questionnaire question(String developmentStack){
        return userService.findQuestionnaire(developmentStack);
    }

    @GetMapping("/user/info")
    public User findUserInfo(String id) {
        return userService.findUserInfo(id);
    }

//    @GetMapping("/user/project/list")
//    public User findProjectList(String id) {
//        return userService.findProjectList(id);
//
//    }
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
    public String invite(Long project_id, Long user_id){
        Project project = projectService.findByProjectId(project_id);
        User user = userService.getById(user_id.intValue());
        invitationService.insert(project, user);
        return null;
    }

    //프론트에서 보내주는 상태에 따라 달라지게 수정해야함!
    //초대받은 유저가 해당 프로젝트를 참여/거절합니다.
    @PostMapping ("/user/project/accept")
    public String accept(HttpServletRequest request, Long project_id){
        String user_id = userService.findSessionId(request);
        User user = userService.findUserInfo(user_id);
        Project project = projectService.findByProjectId(project_id);

        //멤버테이블에 저장
        Member member = new Member();
        member.setUser(user);
        member.setProject(project);
        member.setPosition("팀원");
        memberService.insert(member);

        //알림테이블의 초대상태를 "초대됨" 에서 "수락" 으로 변경
        invitationService.updateState(user_id);

        return null;
       //거절한다면 state를 변경할것
    }

    //by 선경

    //승인인지 거절인지 상태도 받아야함
    //팀장인 유저가 프로젝트에 할당될 유저를 선택
    @PostMapping("/user/project/manage/hire")
    public String hire(HttpServletRequest request, Long project_id){
        Project project = projectService.findByProjectId(project_id);
        String user_id = userService.findSessionId(request);
        User user = userService.findUserInfo(user_id);


        //고용시에 멤버테이블에 저장
        Member member = new Member();
        member.setUser(user);
        member.setProject(project);
        member.setPosition("팀원");
        memberService.insert(member);

        //알림테이블의 초대상태를 "초대됨" 에서 "수락" 으로 변경
        invitationService.updateState(user_id);
        return null;
        //거절시에 지원상태 거절됨으로 바꿔야할 것.
    }

    //프로젝트 관리페이지에서 팀장에게 유저를 추천해줌
    //프로젝트 id받고 점수, 기술 스택이 무엇인지 파악
    //유저 테이블가서 해당 기술스택이 있는 유저 찾음
    //그중 점수가 가장 가까운 유저 추천
    @GetMapping("/user/project/manage/recommend")
    public String recommendUser(HttpServletRequest request, Long project_id ){

        Project project = projectService.findByProjectId(project_id);
        ProjectStack projectStack = projectStackService.findByProjectStackId(project_id);

        return null;
    }
    //프로젝트 관리페이지에서 팀장에게 지원한 유저 목록을 보여줌
    @GetMapping("/user/project/manage/apply")
    public String applyUserList(HttpServletRequest request,Long project_id ){
        Project project = projectService.findByProjectId(project_id);
        String user_id = userService.findSessionId(request);
        User user = userService.findUserInfo(user_id);

        return null;

       //return userService.findManageProjectList(user_id);
    }


}
