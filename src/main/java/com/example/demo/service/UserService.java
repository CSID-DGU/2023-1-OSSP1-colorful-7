package com.example.demo.service;

import com.example.demo.domain.DevelopmentStack;
import com.example.demo.domain.Project;
import com.example.demo.domain.Questionnaire;
import com.example.demo.domain.User;
import com.example.demo.repository.DevelopmentStackRepository;
import com.example.demo.repository.DevelopmentStackRepositoryImpl;
import com.example.demo.repository.QuestionnaireRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Service
public class UserService {
    UserRepository user_rp;
    DevelopmentStackRepository develop_rp;
    QuestionnaireService question_service;
    QuestionnaireRepository questionnaire_rp;
    public UserService(@Qualifier("userRepository")UserRepository user_rp,
                       @Qualifier("developmentStackRepository")DevelopmentStackRepository develop_rp,
                       @Qualifier("questionnaireRepository")QuestionnaireRepository questionnaire_rp){
        this.user_rp = user_rp;
        this.develop_rp = develop_rp;
        this.questionnaire_rp = questionnaire_rp;
    }

    //회원가입
    public User join(User user){
        User result_user = user_rp.save(user);                                //회원가입 시에 회원 테이블에 저장 후
        return result_user;
    }
    //id 중복체크
    public int duplicationCheckId(String id){return user_rp.duplicationCheckId(id);}

    //nickname 중복체크
    public int duplicationCheckNickname(String nickname){return user_rp.duplicationCheckNickname(nickname);}

    //유저찾기
    public User findUserInfo(String id){
        return user_rp.findByid(id);
    }

    //회원 삭제
    public int deleteUser(String id){
        if(user_rp.findByid(id)!=null){
            user_rp.deleteByid(id);
            return 1;
        }else {
            System.out.println("존재하지 않는 유저입니다.");
            return 0;
        }
    }

    //로그인
    public int login(String id, String pw){return user_rp.login(id,pw);}

    //질문지 가져오기
    public Questionnaire findQuestionnaire(String developmentsStack){
        return questionnaire_rp.findQuestionnaire(developmentsStack);
    }


    //세션 아이디 가져오기
    public String findSessionId(HttpServletRequest request){
        HttpSession session = request.getSession();
        String user_id = (String)session.getAttribute("id");
        return user_id;
    }

    //세션 삭제하기
    public void deleteSession(HttpServletRequest request){
        HttpSession session = request.getSession();
        session.invalidate();
    }

    //본인이 팀장인 프로젝트 가져오기
    public List<Project> findManageProjectList(String user_id){
        List<Project> list = user_rp.findManageProjectList(user_id);
        return list;
    }

    public User getById(Integer user_id){
        return user_rp.getReferenceById(user_id);
    }

//    public List<Project> findProjectList(String user_id) {
//        List<Project> list = user_rp.findProjectList(user_id);
//        return list;
//    }


    /* //지원한 프로젝트 리스트 가져오기
    public List<Project> findApplyProjectList(String userId) {
        List<Project> applyProjectList = user_rp.findApplyProjectList(user_id);
        return applyProjectList;
        */
}

