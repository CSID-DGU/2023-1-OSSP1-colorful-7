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
    private File representative_Img;
    private String project_title;
    private String project_content;
    private int like_count;
    private int visited_number;
    private Timestamp created_at;
    private Timestamp updated_at;

    // 이 테이블 db 다시 짜야됨. 필요 인원 테이블이 추가로 필요한지.
    @OneToMany(mappedBy = "project")
    private List<Member> members;
    @OneToMany(mappedBy = "project")
    private List<Invitation> invitations;
    @OneToMany(mappedBy = "project")
    private List<ProjectLike> project_likes;

}
