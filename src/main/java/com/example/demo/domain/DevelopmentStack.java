package com.example.demo.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name="developmentStack")
public class DevelopmentStack {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long stack_id;
    @ManyToOne
    private User user;
    private String development_stack;
    private int grade;
    private int version;
}
