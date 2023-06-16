package com.example.demo.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name="questionnaire")
public class Questionnaire {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int questionnaire_id;
    private String questionnaire_content;
    private int version;
    private int questionnaire_total;
    private String development_stack;

}
