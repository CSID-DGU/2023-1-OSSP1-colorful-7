/*package com.example.demo.controller;

public class ProjectService {
    public List<Project> getRecommendedProjects() {
        // 추천 프로젝트를 가져오는 로직을 구현해주세요.
        // 필요한 경우 데이터베이스나 외부 소스에서 데이터를 가져와서 반환합니다.
    }

    public List<Project> getPopularProjects() {
        // 인기 프로젝트를 가져오는 로직을 구현해주세요.
        // 필요한 경우 데이터베이스나 외부 소스에서 데이터를 가져와서 반환합니다.
    }

    public List<Project> getRecentProjects() {
        // 최근 프로젝트를 가져오는 로직을 구현해주세요.
        // 필요한 경우 데이터베이스나 외부 소스에서 데이터를 가져와서 반환합니다.
    }
}

@Controller
@RequestMapping("/api/projects")
public class MainController {
    private ProjectService projectService;

    public MainController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping("/recommended")
    public ResponseEntity<List<Project>> getRecommendedProjects() {
        List<Project> recommendedProjects = projectService.getRecommendedProjects();
        return ResponseEntity.ok(recommendedProjects);
    }

    @GetMapping("/popular")
    public ResponseEntity<List<Project>> getPopularProjects() {
        List<Project> popularProjects = projectService.getPopularProjects();
        return ResponseEntity.ok(popularProjects);
    }

    @GetMapping("/recent")
    public ResponseEntity<List<Project>> getRecentProjects() {
        List<Project> recentProjects = projectService.getRecentProjects();
        return ResponseEntity.ok(recentProjects);
    }
}*/
