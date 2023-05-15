import { Button, Typography } from 'antd'
import { CONTAINER_WIDTH, HEADER_HEIGHT } from 'constants/system/layout'
import styled from 'styled-components'

export const Root = styled.div`
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px #c9c9c9 solid;
  box-shadow: 0 1px 2px rgba(57, 63, 72, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`

export const Container = styled.div`
  width: ${CONTAINER_WIDTH}px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoImg = styled.img`
  width: 120px;
  cursor: pointer;
`

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const MenuButtonContainer = styled.div`
  display: flex;
  gap: 5px;
`

export const MenuProjectButton = styled(Button)``

export const MenuProjectButtonTypo = styled(Typography)`
  font-weight: 500;
`

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const LoginButton = styled(Button)``
export const JoinButton = styled(Button)``
export const MyPageButton = styled(Button)``
export const LogoutButton = styled(Button)``
