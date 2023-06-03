package com.example.demo.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name="projectLike")
public class ProjectLike {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long project_like_id;
    @ManyToOne
    private User user;
    @ManyToOne
    private Project project;
}
