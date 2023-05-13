import projectListIcon1Img from 'assets/images/main/project_list_icon1.png'
import { ProjectCard } from 'components/ProjectCard'
import projectListSampleJson from 'constants/json/project_list_sample.json'
import { FC } from 'react'
import { ProjectListType } from 'types/project'
import { camelizeKey } from 'utils/camelizeKey'
import { Container, ProjectCardContainer, Root, TitleContainer, TitleLogoImg, TitleTypo } from './styled'

type PopularProjectListSectionProps = {
  className?: string
}

export const PopularProjectListSection: FC<PopularProjectListSectionProps> = ({ className }) => {
  const projectListData = camelizeKey(projectListSampleJson.project_list) as ProjectListType
  return (
    <Root className={className}>
      <Container>
        <TitleContainer>
          <TitleLogoImg src={projectListIcon1Img} alt={'요즘 뜨는 프로젝트 로고 이미지'} />
          <TitleTypo>요즘 뜨는 프로젝트</TitleTypo>
        </TitleContainer>
        <ProjectCardContainer>
          {projectListData.slice(0, 4).map((projectItemData) => (
            <ProjectCard projectData={projectItemData} key={`project_card_${projectItemData.key}`} />
          ))}
        </ProjectCardContainer>
      </Container>
    </Root>
  )
}
