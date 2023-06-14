package com.example.demo.domain;

import lombok.Getter;
import lombok.Setter;

//import lombok.toString;
import javax.persistence.*;

@Entity
@Table(name="ProjectLike")
@Getter
@Setter
//@toString
public class ProjectLike {

    @Id //PK지정
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto increment
    //private Long project_like_id;
    @Column(name="project_like_id")
    private Long project_like_id;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name="project_id")
    private Project project;

}
