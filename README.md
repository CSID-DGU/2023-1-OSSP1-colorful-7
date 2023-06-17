# 2023-1-OSSP-colorful-7
<img src="https://img.shields.io/badge/React-3776AB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"> <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
# :raising_hand:개발 프로젝트 매칭 서비스 New TEAMING
## 팀원
|이름|학번|역할|
|------|---|---|
|이나경|2020111682|프론트|
|김희서|2021111685|프론트|
|이선경|2021112029|백엔드|
|이승지|2020111990|백엔드|
|정유진|2018111183|백엔드|

## 프로젝트 주제
초보 개발자(대학생)들을 대상으로 사용자에 역량과 관심 분야에 맞는 개발 프로젝트를 제공하는 웹 플랫폼 구현

## 기존 프로젝트 개선점
- :star2:숙련도 평가 방법 개선: 기존 프로젝트의 추천 프로젝트 기능은 사용자에게 직접 기술 스택과 그 스택에 대한 숙련도를 입력받아 매칭 알고리즘에 사용한다. 
하지만 이 분야의 숙련자가 아닌 대학생들을 상대로 한 자기평가는 객관적이지 않기 때문에, 객관적인 점수 부여를 위해 질문지를 추가하여 개선하였다.
- :feet:개발 프레임워크 변경: 프로젝트를 처음부터 다시 제작하였고, 이 과정에서 프론트엔드를 React.js에서 React.ts를 사용하는 것으로 변경하였다.

## 프로젝트 내용
- 유저는 로그인 시 아이디, 비밀번호와 함께 개발 스택을 입력받고 해당 스택에 대한 질문지를 풀이한다. 질문지의 정답률에 따라 유저의 등급이 결정된다.
- 질문지는 admin으로 로그인하여 수정할 수 있다. 수정할 때마다 version이 업데이트된다.
- 메인 페이지에서 추천 프로젝트, 인기 프로젝트, 최신 프로젝트를 확인할 수 있다. 추천 프로젝트는 유저의 등급과, 프로젝트를 생성할 때 팀장이 입력한 희망 팀원 등급에 맞춰 정해진다.
- 팀장은 프로젝트 관리 페이지에서 추천 팀원 목록을 확인할 수 있다. 추천 팀원은 추천 프로젝트의 알고리즘과 동일한 방식으로 구현했다.

## References
https://github.com/kookmin-sw/capstone-2022-17
