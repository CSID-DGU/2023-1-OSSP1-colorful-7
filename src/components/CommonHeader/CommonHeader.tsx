import logoImg from 'assets/images/logo.png'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  JoinButton,
  LoginButton,
  LogoImg,
  LogoutButton,
  MenuButtonContainer,
  MenuContainer,
  MenuProjectButton,
  MenuProjectButtonTypo,
  MyPageButton,
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
  const onClickMyPageButton = () => {
    navigate('/user/profile')
  }
  const onClickLogoutButton = () => {
    // eslint-disable-next-line no-undef
    localStorage.removeItem('test_login')
    // eslint-disable-next-line no-undef
    window.location.reload()
  }

  const renderUserContainer = () => {
    // eslint-disable-next-line no-undef
    if (localStorage.getItem('test_login') === 'true') {
      return (
        <UserContainer>
          <MyPageButton onClick={onClickMyPageButton}>마이페이지</MyPageButton>
          <LogoutButton onClick={onClickLogoutButton}>로그아웃</LogoutButton>
        </UserContainer>
      )
    }

    return (
      <UserContainer>
        <LoginButton onClick={onClickLoginButton}>로그인</LoginButton>
        <JoinButton onClick={onClickJoinButton}>회원가입</JoinButton>
      </UserContainer>
    )
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
        {renderUserContainer()}
      </Container>
    </Root>
  )
}
