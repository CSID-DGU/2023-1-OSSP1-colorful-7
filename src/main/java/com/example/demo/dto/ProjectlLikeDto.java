//DTO클래스는 회원정보에 필요한 내용들 필드로 정의하고 그 필드에 대해서 일반적으로 코딩규칙은 프라이빗으로
package com.example.demo.dto;

import com.example.demo.domain.Project;
import com.example.demo.domain.User;
import lombok.*;


//import javax.persistence.Column;
//import javax.persistence.JoinColumn;
//import javax.persistence.ManyToOne;
//import javax.validation.constraints.Min;
//import javax.validation.constratints.NotNull;

@Getter
@Setter
//기본생성자 자등으로 만들어줌
@NoArgsConstructor
//필드를 모두 매개변수로하는 생성자를 만들어줌
@AllArgsConstructor
//dto객체가 가진 필드값을 출력할때 tostring사용하는데 이를 자동으로 만들어줌
@ToString
public class ProjectlLikeDto {

    private Long project_like_id;
    private User user;
    private Project project;
//int, long이 아닌지..?

}
