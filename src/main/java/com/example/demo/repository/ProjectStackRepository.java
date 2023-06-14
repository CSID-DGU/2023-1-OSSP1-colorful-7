package com.example.demo.repository;

import com.example.demo.domain.DevelopmentStack;
import com.example.demo.domain.ProjectStack;
import com.example.demo.domain.Project;
import com.example.demo.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
public interface ProjectStackRepository extends JpaRepository<ProjectStack, Integer> {
    public ProjectStack findByProjectStackId(Long projectStackId);

}
