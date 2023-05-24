import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { ApplyProjectStatusType, ProjectItemType } from 'types/project'
import { generateRandomProjectCardLogoImg } from 'utils/generateRandomProjectCardLogoImg'
import { getApplyProjectStatusColor, translateApplyProjectStatus } from 'utils/translateStatus'
import {
  CardMeta,
  RepresentativeImg,
  RepresentativeImgBadge,
  RepresentativeImgContainer,
  Root,
} from './styled'

type ManageProjectCardProps = {
  className?: string
  projectItem: ProjectItemType
  status?: ApplyProjectStatusType
}

export const ManageProjectCard: FC<ManageProjectCardProps> = ({ className, projectItem, status }) => {
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
        <RepresentativeImgContainer>
          <RepresentativeImg
            src={projectItem.representativeImg ?? generateRandomProjectCardLogoImg()}
            alt={'프로젝트 대표 이미지'}
          />
          {status && (
            <RepresentativeImgBadge color={getApplyProjectStatusColor(status)}>
              {translateApplyProjectStatus(status)}
            </RepresentativeImgBadge>
          )}
        </RepresentativeImgContainer>
      }
    >
      <CardMeta title={projectItem.title} description={`조회수 : ${projectItem.visitedNumber}회`} />
      
    </Root>
  )
}
