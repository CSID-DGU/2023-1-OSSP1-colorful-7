package com.example.demo.repository;

import com.example.demo.domain.Project;
import com.example.demo.domain.Questionnaire;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Integer> {

    public Project insert(Project project);
    public Project findByProjectId(Long projectId);
    public int delete(Long project_id);


}
