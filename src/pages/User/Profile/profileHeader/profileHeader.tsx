import Avatar from 'assets/images/missing_avatar.png'
import UserListSampleJson from 'constants/json/user_list_sample.json'
import { FC } from 'react'
import { UserInfoType } from 'types/project'
import { camelizeKey } from 'utils/camelizeKey'
import { 
  Root, 
  Container, 
  UserNicknameTypo, 
  UserIcon, 
  UserInfo,
  DevelopmentStackTagContainer,
  DevelopmentStackTag,
  UserIntroductionTypo,
  ModifyButton,
  UserContainer
 } from './styled'

type ProfileHeaderProps = {
  className?: string
}

export const ProfileHeader: FC<ProfileHeaderProps> = ({ className }) => {
  const UserListData: UserInfoType = camelizeKey(UserListSampleJson.user_list) as UserInfoType
  return (
    <Root className={className}>
      <Container>
        <UserContainer>
          <ModifyButton>수정</ModifyButton>
          <UserIcon src={Avatar} alt={'유저 아바타 이미지'} />
        </UserContainer>
        <UserInfo>
          <UserNicknameTypo>{UserListData.nickname}</UserNicknameTypo>
          <DevelopmentStackTagContainer>
            <DevelopmentStackTag color={'volcano'}>웹 프론트엔드</DevelopmentStackTag>
            <DevelopmentStackTag color={'gold'}>앱 클라이언트</DevelopmentStackTag>
          </DevelopmentStackTagContainer>
          <UserIntroductionTypo>
            {UserListData.introduce}
          </UserIntroductionTypo>
        </UserInfo>
      </Container>
    </Root>
  )
}
