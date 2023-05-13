import sampleCardImg1 from 'assets/images/card/card_img1.png'
import { FC } from 'react'
import { ProjectItemType } from 'types/project'
import { getDevelopmentStackColor, translateDevelopmentStack } from 'utils/translateDevelopmentStack'
import { CardMeta, DevelopmentStackTag, DevelopmentStackTagContainer, RepresentativeImg, Root } from './styled'

type ProjectCardProps = {
  className?: string
  projectData: ProjectItemType
}

export const ProjectCard: FC<ProjectCardProps> = ({ className, projectData }) => {
  return (
    <Root
      className={className}
      hoverable
      cover={<RepresentativeImg src={projectData.representativeImg ?? sampleCardImg1} alt={'프로젝트 대표 이미지'} />}
    >
      <CardMeta title={projectData.title} description={`조회수 : ${projectData.visitedNumber}회`} />
      <DevelopmentStackTagContainer size={[0, 3]} wrap>
        {Object.values(projectData.requireMemberList).map((requireMemberItemData, index) => (
          <DevelopmentStackTag
            color={getDevelopmentStackColor(requireMemberItemData.developmentStack)}
            key={`development_stack_tag_${index}`}
          >
            {translateDevelopmentStack(requireMemberItemData.developmentStack)}
          </DevelopmentStackTag>
        ))}
      </DevelopmentStackTagContainer>
    </Root>
  )
}
