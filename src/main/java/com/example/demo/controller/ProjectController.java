package com.example.demo.controller;
//각각의 파라미터를 스트링 변수로 받아서 서비스 클래스로 넘겨주고 서비스는 레파지토리, 레파지토리는 데이터베이스로 넘겨줌
import com.example.demo.domain.Apply;
import com.example.demo.domain.Member;
import com.example.demo.domain.Project;
import com.example.demo.domain.User;
import com.example.demo.service.ApplyService;
import com.example.demo.service.ProjectLikeService;

import com.example.demo.dto.ProjectlLikeDto;

import com.example.demo.service.ProjectService;
import com.example.demo.service.UserService;
import org.springframework.web.bind.annotation.*;


import javax.servlet.http.HttpServletRequest;

@RestController
public class ProjectController {
    private ProjectService projectService;
    private ProjectLikeService projectLikeService;
    private UserService userService;
    private ApplyService applyService;


    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @PostMapping("/project/like")
//    public String projectLike(@RequestParam ProjectlLikeDto projectlLikeDto) {
//        System.out.println("projectlike");
//        System.out.println("projectLikeDTO = "+ projectlLikeDto);
//        return null;
//        //?
//    }
    public String projectLike(HttpServletRequest request, Long projectId){
        projectLikeService.projectLike(request, projectId);
        return null;
    }


    @PostMapping("/project/create")
    public Project projectCreate(Project project){

        return projectService.insert(project);
    }

    @PostMapping("/project/delete")
    public void projectDelete(Long project_id){
        projectService.delete(project_id);
    }

    @GetMapping("/project/details")
    public Project findProject(Long project_id){
        return projectService.findByProjectId(project_id);
    }

    //SK. 팀장이 아닌 프로젝트에 지원한다
    @PostMapping("/project/apply")
    public String apply(HttpServletRequest request, Long project_id){
        String user_id = userService.findSessionId(request);
        User user = userService.findUserInfo(user_id);
        Project project = projectService.findByProjectId(project_id);

        applyService.insert(project, user);
        return null;

    }
}
