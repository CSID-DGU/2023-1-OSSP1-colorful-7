package com.example.demo.repository;

import com.example.demo.domain.Project;
import com.example.demo.domain.User;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;

@Repository
public class UserRepositoryImpl implements UserRepository{
    private EntityManager em;
    public UserRepositoryImpl(EntityManager em){
        this.em = em;
    }

    @Override
    public User save(User user){
        em.persist(user);
        return user;
    }

    @Override
    //유저의 정보 조회
    public User findByid(String id) {
        String sql = "select user from User user where id = :id";
        TypedQuery<User> query = em.createQuery(sql, User.class);
        query.setParameter("id", id);
        List<User> list = query.getResultList();
        for (User entity : list) {
            return entity; //첫번째 entity 바로 리턴. 어차피 찾는 유저는 하나일테니. (가입할 때 id 중복체크를 하기 때문)
        }
        return null;
    }

    @Override
    public int deleteByid(String id){
        User user = findByid(id);
        em.remove(user);
        User removed_user = findByid(id);
        if(removed_user==null) return 1; //해당 id가 없다면 user 삭제 성공
        else return 0; //아니라면 삭제 실패
    }


    @Override
    public int login(String id, String password){
        String sql = "select user from User user where id = :id and password = :password";
        TypedQuery<User> query = em.createQuery(sql, User.class);
        query.setParameter("id", id);
        query.setParameter("password", password);
        List<User> list = query.getResultList();
        if(list.size()!=0) return 1;
        else return 0;
    }
    @Override
    public int duplicationCheckId(String id){
        User user = findByid(id);
        if(user!=null) return 1; //null이 아니라면 해당 id가 이미 있는 것
        else return 0;
    }

    @Override
    public int duplicationCheckNickname(String nickname){
        String sql = "select user from User user where nickname = :nickname";
        TypedQuery<User> query = em.createQuery(sql, User.class);
        query.setParameter("nickname", nickname);
        List<User> list = query.getResultList();
        if(list.size()!=0) return 1; //size가 0이 아니라면 해당 nickname이 이미 있는 것.
        else return 0;
    }

    @Override
    public List<Project> findManageProjectList(String user_id){
        String sql = "select member.project from Member member where member.user_id = :user_id and member.position = :position";
        TypedQuery<Project> query = em.createQuery(sql, Project.class);
        query.setParameter("user_id", user_id);
        query.setParameter("position","팀장");
        List<Project> list = query.getResultList();
        return list;
    }

    @Override
    public List<User> findAll() {
        return null;
    }

    @Override
    public List<User> findAll(Sort sort) {
        return null;
    }

    @Override
    public Page<User> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public List<User> findAllById(Iterable<Integer> integers) {
        return null;
    }

    @Override
    public long count() {
        return 0;
    }

    @Override
    public void deleteById(Integer integer) {

    }

    @Override
    public void delete(User entity) {

    }

    @Override
    public void deleteAllById(Iterable<? extends Integer> integers) {

    }

    @Override
    public void deleteAll(Iterable<? extends User> entities) {

    }

    @Override
    public void deleteAll() {

    }

    @Override
    public <S extends User> List<S> saveAll(Iterable<S> entities) {
        return null;
    }

    @Override
    public Optional<User> findById(Integer integer) {
        return Optional.empty();
    }

    @Override
    public boolean existsById(Integer integer) {
        return false;
    }

    @Override
    public void flush() {

    }

    @Override
    public <S extends User> S saveAndFlush(S entity) {
        return null;
    }

    @Override
    public <S extends User> List<S> saveAllAndFlush(Iterable<S> entities) {
        return null;
    }

    @Override
    public void deleteAllInBatch(Iterable<User> entities) {

    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Integer> integers) {

    }

    @Override
    public void deleteAllInBatch() {

    }

    @Override
    public User getOne(Integer integer) {
        return null;
    }

    @Override
    public User getById(Integer integer) {
        return null;
    }

    @Override
    public User getReferenceById(Integer integer) {
        return null;
    }

    @Override
    public <S extends User> Optional<S> findOne(Example<S> example) {
        return Optional.empty();
    }

    @Override
    public <S extends User> List<S> findAll(Example<S> example) {
        return null;
    }

    @Override
    public <S extends User> List<S> findAll(Example<S> example, Sort sort) {
        return null;
    }

    @Override
    public <S extends User> Page<S> findAll(Example<S> example, Pageable pageable) {
        return null;
    }

    @Override
    public <S extends User> long count(Example<S> example) {
        return 0;
    }

    @Override
    public <S extends User> boolean exists(Example<S> example) {
        return false;
    }

    @Override
    public <S extends User, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return null;
    }


}
