package com.example.demo.repository;

import com.example.demo.domain.Project;
import com.example.demo.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    public User save(User user);
    public User findByid(String id);
    public int deleteByid(String id);
    public int login(String id, String password);
    public int duplicationCheckId(String id);
    public int duplicationCheckNickname(String nickname);
    //public List<Project> printProject(String projectType, int page);
}
