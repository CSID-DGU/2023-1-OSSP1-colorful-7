package com.example.demo.service;

import com.example.demo.domain.DevelopmentStack;
import com.example.demo.domain.Project;
import com.example.demo.domain.ProjectStack;
import com.example.demo.domain.User;
import com.example.demo.repository.ProjectRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.repository.ApplyRepository;
import com.example.demo.response.CommonResponse;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Transactional
@Service
public class ProjectService {
    ProjectRepository project_rp;
    ApplyRepository apply_rp;
    UserService userService;

    public ProjectService(ProjectRepository projectRepository) {
        project_rp = projectRepository;
    }

    public Project findByProjectId(int projectId) {
        Project project = project_rp.findByProjectId(projectId);
        return project;
    }

    public List<ProjectStack> findProjectStackByProjectId(int project_id){
        return project_rp.findProjectStackByProjectId(project_id);
    }

    public Project insert(Project project) {
        return project_rp.insert(project);
    }

    public int delete(int project_id) {
        return project_rp.delete(project_id);
    }

    public void modify(Project project) {
        Optional<Project> projectOptional = project_rp.findById(project.getProject_id());
        if (projectOptional.isPresent()) {
            Project project1 = projectOptional.get();
            // update only present fields
            if (project.getProject_content() != null) project1.setProject_content(project.getProject_content());
            if (project.getProject_title() != null) project1.setProject_title(project.getProject_title());
            if (project.getProject_type() != null) project1.setProject_type(project.getProject_type());
            project_rp.save(project1);
        }
    }

    public List<Project> findAll() {
        return project_rp.findAll();
    }

    //유저에게 프로젝트를 추천하는 메소드
    public List<Project> getRecommendProject(HttpServletRequest request){
        List<Project> temp_list = null;
        HttpSession session = request.getSession();
        String id = (String)session.getAttribute("id");
        User user = userService.findUserById(id);
        DevelopmentStack development_stack = userService.develop_rp.findDevelopmentStack(user.getUser_id());
        String stack = development_stack.getDevelopment_stack();
        int grade = development_stack.getGrade();
        //유저의 developmentStack을 가져왔다!! 그리구?
        //전체 프로젝트를 돌면서, 그 프로젝트의 프로젝트 스택을 다시 돌면서 스택과 등급을 비교하여 된다면 프로젝트를 결과 리스트에 저장.
        List<Project> list = project_rp.findAllProjectList();
        for(Project project : list){
            List<ProjectStack> stack_list = project.getProject_stacks();
            for(ProjectStack project_stack : stack_list){
                if(project_stack.getDevelopment_stack().equals(development_stack) && project_stack.getRequire_grade() == grade){
                    temp_list.add(project);
                }
            }
        }

        List<Project> recommended_project_list = null;

        if(temp_list.size()<=4){
            for(int i=0;i<temp_list.size();i++){
                recommended_project_list.add(temp_list.get(i));
            }
        }

        while(temp_list.size()>4){
            List<Integer> numbers = new ArrayList<>();
            for (int i = 1; i <= temp_list.size(); i++) {
                numbers.add(i);
            }

            List<Integer> randomNumbers = new ArrayList<>();
            Random random = new Random();
            for (int i = 0; i < 4; i++) {
                int index = random.nextInt(numbers.size());
                randomNumbers.add(numbers.remove(index));
            }
            for(Integer num : randomNumbers){
                recommended_project_list.add(temp_list.get(num));
            }
        }
        CommonResponse commonResponse = new CommonResponse();
        commonResponse.setStatus("SUCCESS");
        commonResponse.setMessage(null);
        return recommended_project_list;
    }
    public List<Project> findEndProjects(String user_id) {
        List<Project> list = project_rp.findEndProjects(user_id);
        return list;
    }


    public List<Project> findAllProjectList() {
        List<Project> list = project_rp.findAllProjectList();
        return list;
    }
}


