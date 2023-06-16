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

    public Long findIdByProject_id(String project_id){
        return apply_rp.findIdByProject_id(project_id);
    }
    public void updateState(String project_id){
        Long apply_id = apply_rp.findIdByProject_id(project_id);
        apply_rp.updateState(apply_id);
    }
}
