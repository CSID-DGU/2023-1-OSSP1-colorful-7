package com.example.demo.controller;

import com.example.demo.domain.DevelopmentStack;
import com.example.demo.domain.Project;
import com.example.demo.domain.Questionnaire;
import com.example.demo.domain.User;
import com.example.demo.service.UserService;
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

    public UserController(UserService userService){
        this.userService = userService;
    }

    @PostMapping("user/join")
    public User insert(User user, DevelopmentStack developmentStack){
        User result_user = userService.join(user, developmentStack);
        return result_user;
    }

    @PostMapping("user/login")
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
        HttpSession session = request.getSession();
        session.setAttribute("id", id);
        ModelAndView mav = new ModelAndView("main");
        return mav;
    }

    @GetMapping("user/join/questionnaire")
    public Questionnaire question(String developmentStack){
        return userService.findQuestionnaire(developmentStack);
    }

    @GetMapping("user/info")
    public User findUserInfo(String id){
        return  userService.findUserInfo(id);

    }
    //유저에게 추천되거나 좋아하는 에서 "추천되는" 에 해당하는 테이블이 없어 구현 중단
    /*@GetMapping("user/project/list")
    public List<Project> printProject(String projectType, int page){
        return userService.printProject(projectType, page);
    }*/

}
