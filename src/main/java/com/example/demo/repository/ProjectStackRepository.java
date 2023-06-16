package com.example.demo.repository;

import com.example.demo.domain.ProjectStack;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectStackRepository extends JpaRepository<ProjectStack, Integer> {
    public ProjectStack insert(ProjectStack projectStack);
}
