//package com.example.demo.controller;
//
//import com.example.demo.controller.dto.RequestType;
//import com.example.demo.controller.dto.ResponseType;
//
//import org.springframework.web.bind.annotation.*;
//import org.springframework.http.ResponseEntity;
//import org.springframework.http.HttpStatus;
//@RestController
//@RequestMapping("/api/users")
//public class UserController {
//
//    @GetMapping("/main/info")
//    public ResponseEntity<ResponseType> getMainInfo() {
//        ResponseType response = new ResponseType();
//
//        // 메인페이지를 렌더링하기 위한 정보 가져오는 로직
//        // ...
//
//        return new ResponseEntity<>(response, HttpStatus.OK);
//    }
//
//    @GetMapping("/project/list")
//    public ResponseEntity<ResponseType> getProjectList(RequestType request) {
//        // request.getType()을 기반으로 프로젝트 리스트를 가져오는 로직
//        // request.getPage()를 사용하여 페이징 처리 등을 구현
//
//        ResponseType response = new ResponseType();
//        response.setProjectList(projectList);
//        return new ResponseEntity<>(response, HttpStatus.OK);
//    }
//
//    @GetMapping("/project/details")
//    public ResponseEntity<ResponseType> getProjectDetails(RequestType request) {
//        long projectKey = request.getProjectKey();
//
//        // projectKey를 기반으로 프로젝트 상세 정보를 가져오는 로직
//        // ...
//
//        ResponseType response = new ResponseType();
//        response.setProjectItem(projectItem);
//        return new ResponseEntity<>(response, HttpStatus.OK);
//    }
//
//    @PostMapping("/project")
//    public ResponseEntity<Project> createProject(@RequestBody Project newProject) {
//        Project createdProject = // 프로젝트 생성 로직
//        return new ResponseEntity<>(createdProject, HttpStatus.CREATED);
//    }
//
//    @PostMapping("/project/apply")
//    public ResponseEntity<String> applyToProject(@RequestParam("projectId") Long projectId) {
//        // 프로젝트 신청 로직 (projectId에 해당하는 프로젝트에 신청)
//        return new ResponseEntity<>("Applied to the project successfully", HttpStatus.OK);
//    }
//
//    @PostMapping("/project/like")
//    public ResponseEntity<String> likeProject(@RequestParam("projectId") Long projectId) {
//        // 프로젝트 좋아요 로직 (projectId에 해당하는 프로젝트 좋아요)
//        return new ResponseEntity<>("Liked the project successfully", HttpStatus.OK);
//    }
//
//    // 기타 다른 API 엔드포인트와 관련된 메서드들...
//
//}