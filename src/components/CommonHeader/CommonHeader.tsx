import logoImg from 'assets/images/logo.png'
import { FC } from 'react'
import {
  Container,
  JoinButton,
  LoginButton,
  LogoImg,
  MenuButtonContainer,
  MenuContainer,
  MenuProjectButton,
  MenuProjectButtonTypo,
  Root,
  UserContainer,
} from './styled'

type CommonHeaderProps = {
  className?: string
}

export const CommonHeader: FC<CommonHeaderProps> = ({ className }) => {
  return (
    <Root className={className}>
      <Container>
        <MenuContainer>
          <LogoImg src={logoImg} alt={'로고 이미지'} />
          <MenuButtonContainer>
            <MenuProjectButton type={'text'}>
              <MenuProjectButtonTypo>프로젝트 둘러보기</MenuProjectButtonTypo>
            </MenuProjectButton>
          </MenuButtonContainer>
        </MenuContainer>
        <UserContainer>
          <LoginButton>로그인</LoginButton>
          <JoinButton>회원가입</JoinButton>
        </UserContainer>
      </Container>
    </Root>
  )
}