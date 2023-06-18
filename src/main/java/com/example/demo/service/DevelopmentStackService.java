package com.example.demo.service;

import com.example.demo.domain.DevelopmentStack;
import com.example.demo.domain.Project;
import com.example.demo.domain.Questionnaire;
import com.example.demo.domain.User;
import com.example.demo.repository.DevelopmentStackRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Set;

@Transactional
@Service
@RequiredArgsConstructor
public class DevelopmentStackService {
    DevelopmentStackRepository develop_rp;
    public DevelopmentStackService(DevelopmentStackRepository developmentStackRepository){
        develop_rp = developmentStackRepository;
    }

    public static List<User> findByStacks(Set<String> strings) {
        return null;
        //구현 아직안됨
    }


    public void insert(DevelopmentStack developmentStack){
        develop_rp.insert(developmentStack);
    }


    public List<DevelopmentStack> findUsersByStacks(List<String> requiredStacks) {
        List<DevelopmentStack> list = develop_rp.findUsersByStacks(requiredStacks);
        return list;

    }
}
