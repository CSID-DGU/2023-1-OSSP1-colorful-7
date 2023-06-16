package com.example.demo.response;

import com.example.demo.repository.MemberRepository;
import com.example.demo.repository.ResponseRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Service
public class ResponseService {
    ResponseRepository response_rp;

    public ResponseService(ResponseRepository responseRepository){
        response_rp = responseRepository;
    }

    public<T> SingleResponse<T> getSingleResponse(CommonResponse result, T data){
        return response_rp.getSingleResponse(result, data);
    }

    public<T> ListResponse<T> getListResponse(CommonResponse result, List<T> list_data){
        return response_rp.getListResponse(result, list_data);
    }

    public SessionResponse getSessionResponse(CommonResponse result, HttpSession session){
        return response_rp.getSessionResponse(result, session);
    }


}
