package com.example.demo.response;

import lombok.Getter;
import lombok.Setter;

import javax.servlet.http.HttpSession;

@Getter
@Setter
public class AdminResponse extends CommonResponse{
    private int isAdmin;
}
