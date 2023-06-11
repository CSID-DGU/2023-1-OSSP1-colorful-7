package com.example.demo.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.File;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name="user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_id;
    private String nickname;
    private String id;
    private String password;
    private File profile;
    private String introduce;

    @OneToMany(mappedBy = "user")
    private List<Invitation> invitations;
    @OneToMany(mappedBy = "user")
    private List<ProjectLike> project_likes;
    @OneToMany(mappedBy = "user")
    private List<DevelopmentStack> developmentStacks;
    @OneToMany(mappedBy = "user")
    private List<Apply> applys;

}
