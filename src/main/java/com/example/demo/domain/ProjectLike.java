package com.example.demo.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
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

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto increment
    //private Long project_like_id;
    @Column
    private Long project_like_id;

    @JsonBackReference
    @ManyToOne
    private User user;

    @JsonBackReference
    @ManyToOne
    private Project project;

}
