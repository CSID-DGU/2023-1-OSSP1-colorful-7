package com.example.demo.repository;

import com.example.demo.domain.*;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplyRepository extends JpaRepository<Apply, Integer> {
    public void insert(Project project, User user);

    public void updateState(Long apply_id);

    public Long findIdByProject_id(String project_id);

    public Apply findById(Long apply_id);
}
