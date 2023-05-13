import projectListIcon2Img from 'assets/images/main/project_list_icon2.png'
import { ProjectCard } from 'components/ProjectCard'
import projectListSampleJson from 'constants/json/project_list_sample.json'
import { FC } from 'react'
import { ProjectListType } from 'types/project'
import { camelizeKey } from 'utils/camelizeKey'
import { Container, ProjectCardContainer, Root, TitleContainer, TitleLogoImg, TitleTypo } from './styled'

type RecentProjectListSectionProps = {
  className?: string
}

export const RecentProjectListSection: FC<RecentProjectListSectionProps> = ({ className }) => {
  const projectListData = camelizeKey(projectListSampleJson.project_list) as ProjectListType
  return (
    <Root className={className}>
      <Container>
        <TitleContainer>
          <TitleLogoImg src={projectListIcon2Img} alt={'요즘 뜨는 프로젝트 로고 이미지'} />
          <TitleTypo>최근 올라온 프로젝트</TitleTypo>
        </TitleContainer>
        <ProjectCardContainer>
          {projectListData.map((projectItemData) => (
            <ProjectCard projectData={projectItemData} key={`project_card_${projectItemData.key}`} />
          ))}
        </ProjectCardContainer>
      </Container>
    </Root>
  )
}
