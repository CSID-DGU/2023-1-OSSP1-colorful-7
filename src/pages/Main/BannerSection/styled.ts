import { CONTAINER_WIDTH } from 'constants/system/layout'
import styled from 'styled-components'

export const Root = styled.div`
  width: 100%;
  background: #50bcdf33;
  display: flex;
  justify-content: center;
  position: relative;
`

export const Container = styled.div`
  width: ${CONTAINER_WIDTH}px;
  display: flex;
  flex-direction: column;
`

export const BannerImg = styled.img`
  width: 100%;
`
