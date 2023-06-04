package com.example.demo.repository;

import com.example.demo.domain.Apply;
import com.example.demo.domain.DevelopmentStack;
import com.example.demo.domain.Project;
import com.example.demo.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplyRepository extends JpaRepository<Apply, Integer> {
    public void insert(Project project, User user);


}
