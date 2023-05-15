import { CommonHeader } from 'components/CommonHeader'
import { ProjectCard } from 'components/ProjectCard'
import applyProjectListSampleJson from 'constants/json/apply_project_list_sample.json'
import projectListSampleJson from 'constants/json/project_list_sample.json'
import { FC } from 'react'
import { ApplyProjectListType, ProjectListType } from 'types/project'
import { camelizeKey } from 'utils/camelizeKey'
import {
  ApplyCardContainer,
  ApplyContainer,
  ApplyTitleTypo,
  Container,
  LikeCardContainer,
  LikeContainer,
  LikeTitleTypo,
  RecommendCardContainer,
  RecommendContainer,
  RecommendTitleTypo,
  Root,
} from './styled'

type UserProfilePageProps = {
  className?: string
}

export const UserProfilePage: FC<UserProfilePageProps> = ({ className }) => {
  const projectListData = camelizeKey(projectListSampleJson.project_list) as ProjectListType
  const applyProjectListData = camelizeKey(applyProjectListSampleJson.project_list) as ApplyProjectListType
  return (
    <Root className={className}>
      <CommonHeader />
      <Container>
        <ApplyContainer>
          <ApplyTitleTypo>지원한 프로젝트 현황</ApplyTitleTypo>
          <ApplyCardContainer>
            {applyProjectListData.map((projectItem) => (
              <ProjectCard
                projectItem={projectItem}
                status={projectItem.status}
                key={`project_card_${projectItem.key}`}
              />
            ))}
          </ApplyCardContainer>
        </ApplyContainer>
        <LikeContainer>
          <LikeTitleTypo>내가 좋아요 표시한 프로젝트</LikeTitleTypo>
          <LikeCardContainer>
            {projectListData
              .sort((a, b) => a.key - b.key)
              .slice(0, 4)
              .map((projectItem) => (
                <ProjectCard projectItem={projectItem} key={`project_card_${projectItem.key}`} />
              ))}
          </LikeCardContainer>
        </LikeContainer>
        <RecommendContainer>
          <RecommendTitleTypo>추천 프로젝트</RecommendTitleTypo>
          <RecommendCardContainer>
            {projectListData
              .sort((a, b) => a.key - b.key)
              .slice(0, 4)
              .map((projectItem) => (
                <ProjectCard projectItem={projectItem} key={`project_card_${projectItem.key}`} />
              ))}
          </RecommendCardContainer>
        </RecommendContainer>
      </Container>
    </Root>
  )
}
