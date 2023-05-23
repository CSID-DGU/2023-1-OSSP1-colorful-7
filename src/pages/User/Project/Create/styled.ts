import { Typography } from 'antd'
import { CONTAINER_WIDTH, HEADER_HEIGHT } from 'constants/system/layout'
import styled from 'styled-components'

export const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${HEADER_HEIGHT}px;
  position: relative;
  padding-bottom: 80px;
`

export const Container = styled.div`
  width: ${CONTAINER_WIDTH}px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const TitleLogoImg = styled.img`
  width: 20px;
`

export const TitleTypo = styled(Typography)`
  font-size: 18px;
  font-weight: bold;
`

export const ProjectOptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px; // 지울까?
  padding: 20px 10px;
  border: 1px #c9c9c9 solid;
  border-radius: 5px;
`

export const ProjectOptionLeftContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 10px; // 지울까?
  margin: 10px;
  padding-right: 10px;
  border-right: 1px #c9c9c9 solid;
`

export const ProjectOptionRightContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  //align-items: center;
  // gap: 10px; // 지울까?
  margin: 10px;
  //padding-left: 10px;
`
export const LeaderPositionContainer = styled.div`
  width: 20%;
  margin-right: 30px;
`
export const InputTitleRequired = styled(Typography)`
  padding-bottom: 10px;
  font-size: 15px;
  font-weight: bold;
  &::after {
    padding-left: 5px;
    content: '*';
    color: red;
  }
`

export const InputTitle = styled(Typography)`
  padding-bottom: 10px;
  font-size: 15px;
  font-weight: bold;
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
`
export const DateTermIcon = styled(Typography)`
  padding: 0 20px;
  font-size: 15px;
  font-weight: bold;
`

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`
