import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { ManageProjectPositionType, ProjectItemType } from 'types/project'
import { generateRandomProjectCardLogoImg } from 'utils/generateRandomProjectCardLogoImg'
import { getManageProjectPositionColor, translateManageProjectPosition } from 'utils/translateStatus'
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
  position?: ManageProjectPositionType
}

export const ManageProjectCard: FC<ManageProjectCardProps> = ({ className, projectItem, position }) => {
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
          {position && (
            <RepresentativeImgBadge color={getManageProjectPositionColor(position)}>
              {translateManageProjectPosition(position)}
            </RepresentativeImgBadge>
          )}
        </RepresentativeImgContainer>
      }
    >
      <CardMeta title={projectItem.title} description={`조회수 : ${projectItem.visitedNumber}회`} />
      
      
    </Root>
  )
}
