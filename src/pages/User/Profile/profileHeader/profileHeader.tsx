import Avatar from 'assets/images/missing_avatar.png'
import { FC } from 'react'
import { 
  Root, 
  Container, 
  UserNicknameTypo, 
  UserIcon, 
  UserInfo,
  DevelopmentStackTagContainer,
  DevelopmentStackTag,
  UserIntroductionTypo
 } from './styled'

type ProfileHeaderProps = {
  className?: string
}

export const ProfileHeader: FC<ProfileHeaderProps> = ({ className }) => {
  return (
    <Root className={className}>
      <Container>
        <UserIcon src={Avatar} alt={'유저 아바타 이미지'} />
        <UserInfo>
          <UserNicknameTypo>고구마멈멍</UserNicknameTypo>
          <DevelopmentStackTagContainer>
            <DevelopmentStackTag color={'volcano'}>웹 프론트엔드</DevelopmentStackTag>
            <DevelopmentStackTag color={'gold'}>앱 클라이언트</DevelopmentStackTag>
          </DevelopmentStackTagContainer>
          <UserIntroductionTypo>풀스택 개발자를 목표로 공부하고 있습니다.<br></br>노래 추천 앱 프로젝트의 팀장을 맡고 있습니다.</UserIntroductionTypo>
        </UserInfo>
      </Container>
    </Root>
  )
}
