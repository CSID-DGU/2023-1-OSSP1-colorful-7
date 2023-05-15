import logoImg from 'assets/images/logo.png'
import { CommonHeader } from 'components/CommonHeader'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  ContentInput,
  InputContainer,
  JoinButton,
  JoinContainer,
  JoinInfoTypo,
  LoginButton,
  LogoImg,
  LogoTypo,
  Root,
} from './styled'

type LoginPageProps = {
  className?: string
}

export const LoginPage: FC<LoginPageProps> = ({ className }) => {
  const navigate = useNavigate()

  const onClickJoinButton = () => {
    navigate('/join')
  }

  const onTestLogin = () => {
    // eslint-disable-next-line no-undef
    localStorage.removeItem('test_login')
    // eslint-disable-next-line no-undef
    localStorage.setItem('test_login', 'true')
  }

  const onKeyPressEnter = (e: any) => {
    if (e.key === 'Enter') {
      onTestLogin()
      navigate('/')
    }
  }

  const onClickLogin = () => {
    onTestLogin()
  }

  return (
    <Root className={className}>
      <CommonHeader />
      <Container>
        <LogoImg src={logoImg} alt={'로고 이미지'} />
        <LogoTypo>당신의 능력, 티밍에서 펼쳐보세요!</LogoTypo>
        <InputContainer>
          <ContentInput placeholder="아이디" />
          <ContentInput placeholder="비밀번호" type="password" onKeyDown={onKeyPressEnter} />
        </InputContainer>
        <LoginButton type="primary" onClick={onClickLogin}>
          로그인
        </LoginButton>
        <JoinContainer>
          <JoinInfoTypo>아직 회원이 아니세요?</JoinInfoTypo>
          <JoinButton type="text" onClick={onClickJoinButton}>
            회원가입
          </JoinButton>
        </JoinContainer>
      </Container>
    </Root>
  )
}
