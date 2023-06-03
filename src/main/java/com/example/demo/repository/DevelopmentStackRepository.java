package com.example.demo.repository;

import com.example.demo.domain.DevelopmentStack;
import com.example.demo.domain.Questionnaire;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DevelopmentStackRepository extends JpaRepository<DevelopmentStack, Integer> {
    public void insert(DevelopmentStack developmentStack);
    public DevelopmentStack findDevelopmentStack(Long user_id);


}
