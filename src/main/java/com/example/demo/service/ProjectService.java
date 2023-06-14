package com.example.demo.service;

import com.example.demo.domain.Project;
import com.example.demo.repository.ProjectRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

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

    public void modify(Project project) {
        Optional<Project> projectOptional = project_rp.findById(project.getProject_id());
        if (projectOptional.isPresent()) {
            Project project1 = projectOptional.get();
            // update only present fields
            if(project.getProject_content() != null) project1.setProject_content(project.getProject_content());
            if(project.getProject_title() != null) project1.setProject_title(project.getProject_title());
            if(project.getProject_type() != null) project1.setProject_type(project.getProject_type());
            project_rp.save(project1);
        }
    }

    public List<Project> findAll() {
        return project_rp.findAll();
    }
}



