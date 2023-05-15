import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProjectItemType } from 'types/project'
import { generateRandomProjectCardLogoImg } from 'utils/generateRandomProjectCardLogoImg'
import { getDevelopmentStackColor, translateDevelopmentStack } from 'utils/translateDevelopmentStack'
import { CardMeta, DevelopmentStackTag, DevelopmentStackTagContainer, RepresentativeImg, Root } from './styled'

type ProjectCardProps = {
  className?: string
  projectItem: ProjectItemType
}

export const ProjectCard: FC<ProjectCardProps> = ({ className, projectItem }) => {
  const navigate = useNavigate()

  const onClickRoot = () => {
    navigate(`/project/${projectItem.key}`)
  }

  return (
    <Root
      className={className}
      onClick={onClickRoot}
      hoverable
      cover={
        <RepresentativeImg
          src={projectItem.representativeImg ?? generateRandomProjectCardLogoImg()}
          alt={'프로젝트 대표 이미지'}
        />
      }
    >
      <CardMeta title={projectItem.title} description={`조회수 : ${projectItem.visitedNumber}회`} />
      <DevelopmentStackTagContainer size={[0, 3]} wrap>
        {Object.values(projectItem.requireMemberList.slice(0, 2)).map((requireMemberItemData, index) => (
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
