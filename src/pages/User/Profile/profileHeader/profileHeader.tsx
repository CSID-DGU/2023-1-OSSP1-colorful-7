import Avatar from 'assets/images/missing_avatar.png'
import UserListSampleJson from 'constants/json/user_list_sample.json'
import { FC } from 'react'
import { UserInfoListType } from 'types/project'
import { camelizeKey } from 'utils/camelizeKey'
import { translateDevelopmentStack, getDevelopmentStackColor } from 'utils/translateDevelopmentStack'
import { 
  Root, 
  Container, 
  UserNicknameTypo, 
  UserIcon, 
  UserInfo,
  DevelopmentStackTagContainer,
  DevelopmentStackTag,
  UserIntroductionTypo,
  UserContainer
 } from './styled'

type ProfileHeaderProps = {
  className?: string
}

export const ProfileHeader: FC<ProfileHeaderProps> = ({ className }) => {
  const UserListData: UserInfoListType = camelizeKey(UserListSampleJson.user_list) as UserInfoListType
  return (
    <Root className={className}>
      <Container>
        <UserContainer>
          <UserIcon src={Avatar} alt={'유저 아바타 이미지'} />
        </UserContainer>
        <UserInfo>
          <UserNicknameTypo>{UserListData[0].nickname}</UserNicknameTypo>
          <DevelopmentStackTagContainer>
            {UserListData[0].developmentStackList.map((UserListItem, index) => (
              <DevelopmentStackTag
                color={getDevelopmentStackColor(UserListItem.developmentStack)}
                key={`development_stack_tag_${index}`}
              >
                {translateDevelopmentStack(UserListItem.developmentStack)}
              </DevelopmentStackTag>
            ))}
          </DevelopmentStackTagContainer>
          <UserIntroductionTypo>{UserListData[0].introduce}</UserIntroductionTypo>
        </UserInfo>
      </Container>
    </Root>
  )
}
