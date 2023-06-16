package com.example.demo.repository;

import com.example.demo.response.CommonResponse;
import com.example.demo.response.ListResponse;
import com.example.demo.response.SessionResponse;
import com.example.demo.response.SingleResponse;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.servlet.http.HttpSession;
import java.util.List;

@Repository
public class ResponseRepositoryImpl implements ResponseRepository{

    private EntityManager em;
    public ResponseRepositoryImpl(EntityManager em){
        this.em = em;
    }
    public<T> SingleResponse<T> getSingleResponse(CommonResponse result, T data){
        SingleResponse singleResponse = new SingleResponse();
        singleResponse.setData(data);
        singleResponse.setStatus(result.getStatus());
        singleResponse.setMessage(result.getMessage());
        return singleResponse;
    }
    public<T> ListResponse<T> getListResponse(CommonResponse result, List<T> list_data){
        ListResponse listResponse = new ListResponse();
        listResponse.setStatus(result.getStatus());
        listResponse.setMessage(result.getMessage());
        listResponse.setList_data(list_data);
        return listResponse;
    }
    public SessionResponse getSessionResponse(CommonResponse result, HttpSession session){
        SessionResponse sessionResponse = new SessionResponse();
        sessionResponse.setStatus(result.getStatus());
        sessionResponse.setMessage(result.getMessage());
        sessionResponse.setSession(session);
        return sessionResponse;
    }
}
