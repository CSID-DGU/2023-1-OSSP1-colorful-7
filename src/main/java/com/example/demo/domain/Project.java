package com.example.demo.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.File;
import java.sql.Timestamp;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name="project")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Project_id;
    private String project_title;
    private String project_content;
    private int like_count;
    private int visited_number;
    private Timestamp created_at;
    private Timestamp updated_at;
    private String project_type;
    private String project_start_date;
    private String project_end_date;
    private int location;
    private String is_available;
    @OneToMany(mappedBy = "project")
    private List<Member> members;
    @OneToMany(mappedBy = "project")
    private List<Invitation> invitations;
    @OneToMany(mappedBy = "project")
    private List<ProjectLike> project_likes;
    @OneToMany(mappedBy = "project")
    private List<ProjectStack> project_stacks;
    @OneToMany(mappedBy = "project")
    private List<Apply> applys;


}
