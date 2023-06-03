package com.example.demo.service;

import com.example.demo.domain.Questionnaire;
import com.example.demo.domain.User;
import com.example.demo.repository.DevelopmentStackRepository;
import com.example.demo.repository.QuestionnaireRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Transactional
@Service
public class QuestionnaireService {
    QuestionnaireRepository question_rp;
    public QuestionnaireService(QuestionnaireRepository questionnaireRepository){
        question_rp = questionnaireRepository;
    }

    public void insert(Questionnaire questionnaire){
        question_rp.insert(questionnaire);
    }
    public Questionnaire findQuestionnaire(String developmentStack){
        return question_rp.findQuestionnaire(developmentStack);
    }
}
