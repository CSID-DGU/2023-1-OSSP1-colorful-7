//package com.example.demo;
//
//import com.example.demo.domain.Questionnaire;
//import com.example.demo.service.QuestionnaireService;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.test.annotation.Rollback;
//import org.springframework.test.context.web.WebAppConfiguration;
//
//import javax.transaction.Transactional;
//
//@SpringBootTest
//@Transactional
//@WebAppConfiguration
//@Rollback(false)
//public class QuestionnaireServiceTest {
//    @Autowired
//    QuestionnaireService questionnaireService;
//
//    @Test
//    public void insert(){
//        Questionnaire question = new Questionnaire();
//        question.setQuestionnaire_content("질문~~~~~~~~~");
//        question.setQuestionnaire_total(80);
//        question.setDevelopment_stack("앱");
//        question.setVersion(1);
//
//        questionnaireService.insert(question);
//    }
//
//    @Test
//    public void findQuestionnaire(){
//        Questionnaire result = questionnaireService.findQuestionnaire("웹 백엔드");
//        System.out.println(result.getQuestionnaire_id());
//        System.out.println(result.getQuestionnaire_content());
//        System.out.println(result.getQuestionnaire_total());
//        System.out.println(result.getVersion());
//    }
//}
