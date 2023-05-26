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
