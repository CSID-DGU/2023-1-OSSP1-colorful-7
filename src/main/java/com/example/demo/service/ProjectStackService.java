package com.example.demo.service;

import com.example.demo.domain.Member;
import com.example.demo.domain.Project;
import com.example.demo.domain.ProjectStack;
import com.example.demo.domain.User;
import com.example.demo.repository.MemberRepository;
import com.example.demo.repository.ProjectRepository;
import com.example.demo.repository.ProjectStackRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import java.util.List;



@Transactional
@Service

public class ProjectStackService {
    ProjectStackRepository projectStack_rp;
    UserService userService;
    ProjectService projectService;

    public ProjectStackService(ProjectStackRepository projectStackRepository) {
        projectStack_rp = projectStackRepository;
    }

    public ProjectStack findByProjectStackId(Long projectStackId) {
        ProjectStack projectStack = projectStack_rp.findByProjectStackId(projectStackId);
        return projectStack;
    }
}
