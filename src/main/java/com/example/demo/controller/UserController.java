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
    public User findUserInfo(String id){
        return  userService.findUserInfo(id);

    }


    @GetMapping("/user/project/manage/list")
    public List<Project> manageProjectList(HttpServletRequest request){
        String user_id = userService.findSessionId(request);
        return userService.findManageProjectList(user_id);
    }

    @GetMapping("/user/project/manage/invite")
    public String invite(Long project_id, Long user_id){
        Project project = projectService.findByProjectId(project_id);
        User user = userService.getById(user_id.intValue());
        invitationService.insert(project, user);
        return null;
    }

    @GetMapping("/user/project/accept")
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
    }
}
