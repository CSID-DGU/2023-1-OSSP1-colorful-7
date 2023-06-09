package com.example.demo.service;

import com.example.demo.domain.Project;
import com.example.demo.domain.User;
import com.example.demo.repository.ProjectRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Service
public class ProjectService {
    ProjectRepository project_rp;
    UserService userService;

    public ProjectService(ProjectRepository projectRepository) {
        project_rp = projectRepository;
    }

    public Project findByProjectId(Long projectId) {
        Project project = project_rp.findByProjectId(projectId);
        return project;
    }

    public Project insert(Project project) {
        return project_rp.insert(project);
    }

    public int delete(Long project_id) {
        return project_rp.delete(project_id);
    }
}


