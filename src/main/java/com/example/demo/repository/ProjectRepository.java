package com.example.demo.repository;

import com.example.demo.domain.Project;
import com.example.demo.domain.ProjectStack;
import com.example.demo.domain.Questionnaire;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Integer> {

    public Project insert(Project project);
    public Project findByProjectId(int projectId);
    public int delete(int project_id);

    public List<ProjectStack> findProjectStackByProjectId(int project_id);

    public List<Project> findAllProjectList();




   //public List<Project> findBelongingProjects(String user_id);

    public List<Project> findEndProjects(String user_id);

    //public List<Project> findAll();

}
