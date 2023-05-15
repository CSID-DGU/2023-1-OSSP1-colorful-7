import logoImg from 'assets/images/logo.png'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()

  const onClickLogoButton = () => {
    navigate('/')
  }
  const onClickProjectListButton = () => {
    navigate('/project/list')
  }
  const onClickLoginButton = () => {
    navigate('/login')
  }
  const onClickJoinButton = () => {
    navigate('/join')
  }

  return (
    <Root className={className}>
      <Container>
        <MenuContainer>
          <LogoImg onClick={onClickLogoButton} src={logoImg} alt={'로고 이미지'} />
          <MenuButtonContainer>
            <MenuProjectButton type={'text'} onClick={onClickProjectListButton}>
              <MenuProjectButtonTypo>프로젝트 둘러보기</MenuProjectButtonTypo>
            </MenuProjectButton>
          </MenuButtonContainer>
        </MenuContainer>
        <UserContainer>
          <LoginButton onClick={onClickLoginButton}>로그인</LoginButton>
          <JoinButton onClick={onClickJoinButton}>회원가입</JoinButton>
        </UserContainer>
      </Container>
    </Root>
  )
}
