package com.example.demo.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name="projectStack")
public class ProjectStack {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long projectStack_id;

    @ManyToOne
    private Project project;
    private String development_stack;
    private int require_member;
    private int require_grade;

}
