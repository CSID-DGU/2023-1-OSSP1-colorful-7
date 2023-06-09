//package com.example.demo.controller;
//
//import com.example.demo.controller.dto.ProjectApiResponse;
//import com.example.demo.controller.dto.UserApiResponse;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/users")
//public class HelloUserController {
//    @GetMapping("/main/info")
//    public UserApiResponse getMainInfo() {
//        // Main info retrieval logic
//        List<ProjectItemType> recommendedProjects = getRecommendedProjects();
//        List<ProjectItemType> popularProjects = getPopularProjects();
//        List<ProjectItemType> recentProjects = getRecentProjects();
//
//        return new UserApiResponse("SUCCESS", recommendedProjects, popularProjects, recentProjects);
//    }
//
//    @GetMapping("/project/list/{type}/{page}")
//    public UserApiResponse getProjectList(@PathVariable("type") String type, @PathVariable("page") int page) {
//        // Project list retrieval logic based on type and page
//        List<ProjectItemType> projectList = getProjectListByTypeAndPage(type, page);
//
//        return new UserApiResponse("SUCCESS", projectList);
//    }
//
//    @GetMapping("/project/details/{projectKey}")
//    public UserApiResponse getProjectDetails(@PathVariable("projectKey") int projectKey) {
//        // Project details retrieval logic based on projectKey
//        ProjectItemType projectItem = getProjectDetailsByKey(projectKey);
//
//        return new UserApiResponse("SUCCESS", projectItem);
//    }
//
//
//
//    private List<ProjectItemType> getRecommendedProjects() {
//        // Retrieve recommended projects
//        // Implementation omitted for brevity
//    }
//
//    private List<ProjectItemType> getPopularProjects() {
//        // Retrieve popular projects
//        // Implementation omitted for brevity
//    }
//
//    private List<ProjectItemType> getRecentProjects() {
//        // Retrieve recent projects
//        // Implementation omitted for brevity
//    }
//
//    private List<ProjectItemType> getProjectListByTypeAndPage(String type, int page) {
//        // Retrieve project list based on type and page
//        // Implementation omitted for brevity
//    }
//
//    private ProjectItemType getProjectDetailsByKey(int projectKey) {
//        // Retrieve project details based on projectKey
//        // Implementation omitted for brevity
//    }
//
//    @PostMapping("/project")
//    @Secured("ROLE_USER")
//    public ProjectApiResponse createProject(@RequestParam("title") String title,
//                                            @RequestParam("representativeImg") MultipartFile representativeImg,
//                                            @RequestParam("projectType") String projectType,
//                                            @RequestParam("requireMemberList") List<ProjectRequireMemberType> requireMemberList) {
//        // Project creation logic
//        int projectKey = createNewProject(title, representativeImg, projectType, requireMemberList);
//
//        return new ProjectApiResponse(projectKey);
//    }
//
//    @DeleteMapping("/project/{projectKey}")
//    @Secured("ROLE_USER")
//    public ProjectApiResponse deleteProject(@PathVariable("projectKey") int projectKey) {
//        // Project deletion logic
//        deleteProjectByKey(projectKey);
//
//        return new ProjectApiResponse();
//    }
//
//    @PostMapping("/project/apply")
//    @Secured("ROLE_USER")
//    public ProjectApiResponse applyToProject(@RequestParam("projectKey") int projectKey) {
//        // Project application logic
//        applyToProjectByKey(projectKey);
//
//        return new ProjectApiResponse(projectKey);
//    }
//
//    @PostMapping("/project/like")
//    @Secured("ROLE_USER")
//    public ProjectApiResponse toggleProjectLike(@RequestParam("projectKey") int projectKey) {
//        // Project like toggle logic
//        toggleProjectLikeByKey(projectKey);
//
//        return new ProjectApiResponse();
//    }
//
//    private int createNewProject(String title, MultipartFile representativeImg, String projectType, List<ProjectRequireMemberType> requireMemberList) {
//        // Create new project
//        // Implementation omitted for brevity
//    }
//
//    private void deleteProjectByKey(int projectKey) {
//        // Delete project by key
//        // Implementation omitted for brevity
//    }
//
//    private void applyToProjectByKey(int projectKey) {
//        // Apply to project by key
//        // Implementation omitted for brevity
//    }
//
//    private void toggleProjectLikeByKey(int projectKey) {
//        // Toggle project like by key
//        // Implementation omitted for brevity
//    }
//
//    @PostMapping("/login")
//    public UserLoginResponse login(@RequestBody UserLoginRequest userLoginRequest) {
//        // Login logic
//        String id = userLoginRequest.getId();
//        String password = userLoginRequest.getPassword();
//
//        // Generate access token and refresh token
//        String accessToken = generateAccessToken();
//        String refreshToken = generateRefreshToken();
//
//        return new UserLoginResponse(accessToken, refreshToken);
//    }
//
//    @PostMapping("/join")
//    public UserJoinResponse join(@RequestBody UserJoinRequest userJoinRequest) {
//        // User registration logic
//        String id = userJoinRequest.getId();
//        String password = userJoinRequest.getPassword();
//        UserInfoType userInfo = userJoinRequest.getUserInfo();
//
//        // Generate access token and refresh token
//        String accessToken = generateAccessToken();
//        String refreshToken = generateRefreshToken();
//
//        return new UserJoinResponse(accessToken, refreshToken);
//    }
//
//    @GetMapping("/join/questionnaire")
//    public UserQuestionnaireResponse getQuestionnaire(@RequestParam("developmentStack") DevelopmentStackType developmentStack) {
//        // Get questionnaire based on development stack
//        QuestionnaireType questionnaire = getQuestionnaireByStack(developmentStack);
//
//        return new UserQuestionnaireResponse(questionnaire);
//    }
//
//    private String generateAccessToken() {
//        // Generate access token
//        // Implementation omitted for brevity
//    }
//
//    private String generateRefreshToken() {
//        // Generate refresh token
//        // Implementation omitted for brevity
//    }
//
//    private QuestionnaireType getQuestionnaireByStack(DevelopmentStackType developmentStack) {
//        // Retrieve questionnaire based on development stack
//        // Implementation omitted for brevity
//    }
//    @GetMapping("/info")
//    @Secured("ROLE_USER")
//    public UserInfoResponse getUserInfo() {
//        // Get user information logic
//        UserInfoType userInfo = getUserInformation();
//
//        return new UserInfoResponse(userInfo);
//    }
//
//    @GetMapping("/project/list")
//    @Secured("ROLE_USER")
//    public ProjectListResponse getProjectList(@RequestParam("type") String type,
//                                              @RequestParam("page") int page) {
//        // Get recommended or liked project list logic
//        ProjectListType projectList = getProjectListByType(type, page);
//
//        return new ProjectListResponse(projectList);
//    }
//
//    @GetMapping("/project/apply/list")
//    @Secured("ROLE_USER")
//    public ApplyProjectListResponse getApplyProjectList() {
//        // Get applied project list logic
//        ApplyProjectListType applyProjectList = getAppliedProjectList();
//
//        return new ApplyProjectListResponse(applyProjectList);
//    }
//
//    @GetMapping("/project/manage/list")
//    @Secured("ROLE_USER")
//    public ManageProjectListResponse getManageProjectList() {
//        // Get managed project list logic
//        ManageProjectListType manageProjectList = getManagedProjectList();
//
//        return new ManageProjectListResponse(manageProjectList);
//    }
//
//    @PostMapping("/project/manager/list")
//    @Secured("ROLE_USER")
//    public void assignUserAsManager(@RequestBody AssignManagerRequest assignManagerRequest) {
//        // Assign user as manager logic
//        int projectKey = assignManagerRequest.getProjectKey();
//        int userKey = assignManagerRequest.getUserKey();
//
//        assignUserAsProjectManager(projectKey, userKey);
//    }
//
//    private UserInfoType getUserInformation() {
//        // Retrieve user information
//        // Implementation omitted for brevity
//    }
//
//    private ProjectListType getProjectListByType(String type, int page) {
//        // Retrieve project list by type (recommended or liked)
//        // Implement pagination logic to retrieve 10 projects per page
//        // Implementation omitted for brevity
//    }
//
//    private ApplyProjectListType getAppliedProjectList() {
//        // Retrieve applied project list for the user
//        // Implementation omitted for brevity
//    }
//
//    private ManageProjectListType getManagedProjectList() {
//        // Retrieve managed project list for the user as a team leader
//        // Implementation omitted for brevity
//    }
//
//    private void assignUserAsProjectManager(int projectKey, int userKey) {
//        // Assign user as project manager
//        // Implementation omitted for brevity
//    }
//
//
//}
