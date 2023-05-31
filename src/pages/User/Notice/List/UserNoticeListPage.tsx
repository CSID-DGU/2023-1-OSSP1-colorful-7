import { CommonHeader } from 'components/CommonHeader'
import { ProjectCard } from 'components/ProjectCard'
import projectListSampleJson from 'constants/json/project_list_sample.json'
import { FC } from 'react'
import { ProjectListType } from 'types/project'
import { camelizeKey } from 'utils/camelizeKey'
import { Container, ProjectCardContainer, ProjectTitleTypo, Root } from './styled'

type UserNoticeListPageProps = {
  className?: string
}

export const UserNoticeListPage: FC<UserNoticeListPageProps> = ({ className }) => {
  const projectListData = camelizeKey(projectListSampleJson.project_list) as ProjectListType
  return (
    <Root className={className}>
      <CommonHeader />
      <Container>
        <ProjectTitleTypo>초대받은 프로젝트</ProjectTitleTypo>
        <ProjectCardContainer>
          {projectListData
            .sort((a, b) => a.key - b.key)
            .map((projectItem) => (
              <ProjectCard projectItem={projectItem} key={`project_card_${projectItem.key}`} />
            ))}
        </ProjectCardContainer>
      </Container>
    </Root>
  )
}
