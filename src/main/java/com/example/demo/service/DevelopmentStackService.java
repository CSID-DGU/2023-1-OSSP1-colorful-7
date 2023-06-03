package com.example.demo.service;

import com.example.demo.domain.DevelopmentStack;
import com.example.demo.domain.Questionnaire;
import com.example.demo.repository.DevelopmentStackRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Transactional
@Service
public class DevelopmentStackService {
    DevelopmentStackRepository develop_rp;
    public DevelopmentStackService(DevelopmentStackRepository developmentStackRepository){
        develop_rp = developmentStackRepository;
    }

    public void insert(DevelopmentStack developmentStack){
        develop_rp.insert(developmentStack);
    }

}
