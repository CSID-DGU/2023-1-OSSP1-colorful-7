package com.example.demo.service;

import com.example.demo.domain.Project;
import com.example.demo.domain.User;
import com.example.demo.repository.ProjectLikeRepository;
import com.example.demo.repository.ProjectRepository;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;

@Transactional
@Service
public class ProjectLikeService {
    ProjectLikeRepository projectLike_rp;
    UserService userService;
    ProjectService projectService;
    public ProjectLikeService(ProjectLikeRepository projectLikeRepository){
        projectLike_rp = projectLikeRepository;
    }

    public void projectLike(HttpServletRequest request, Long projectId){
        String user_id = userService.findSessionId(request);
        User user = userService.findUserInfo(user_id);
        Project project = projectService.findByProjectId(projectId);
        projectLike_rp.insert(project, user);
    }
}
