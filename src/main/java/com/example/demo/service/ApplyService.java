package com.example.demo.service;

import com.example.demo.domain.Project;
import com.example.demo.domain.User;
import com.example.demo.repository.ApplyRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Transactional
@Service
public class ApplyService {
    ApplyRepository apply_rp;
    public ApplyService(ApplyRepository applyRepository){
        apply_rp = applyRepository;
    }

    public void insert(Project project, User user){
        apply_rp.insert(project,user);
    }
}
