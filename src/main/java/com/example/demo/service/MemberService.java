package com.example.demo.service;

import com.example.demo.domain.Member;
import com.example.demo.repository.InvitationRepository;
import com.example.demo.repository.MemberRepository;

public class MemberService {
    MemberRepository member_rp;
    public MemberService(MemberRepository memberRepository){
        member_rp = memberRepository;
    }

    public void insert(Member member){
        member_rp.insert(member);
    }
}
