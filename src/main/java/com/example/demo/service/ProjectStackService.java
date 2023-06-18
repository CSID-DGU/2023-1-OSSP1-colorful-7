package com.example.demo.service;

import com.example.demo.domain.DevelopmentStack;
import com.example.demo.domain.Project;
import com.example.demo.domain.ProjectStack;
import com.example.demo.domain.User;
import com.example.demo.repository.ProjectRepository;
import com.example.demo.repository.ProjectStackRepository;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ProjectStackService {
    ProjectStackRepository projectStack_rp;

    public ProjectStackService(ProjectStackRepository projectStackRepository){
        projectStack_rp = projectStackRepository;
    }

    public ProjectStack insert(ProjectStack projectStack){
       return projectStack_rp.insert(projectStack);
    }

    public List<ProjectStack> findStackByProjectId(int projectId) {
        List<ProjectStack> projectStack = projectStack_rp.findStackByProjectId(projectId);
        return projectStack;
        //다시 구현하기
    }


}
