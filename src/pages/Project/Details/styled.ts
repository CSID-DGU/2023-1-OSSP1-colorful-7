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

export const ContentCOntainer = styled.div`
  width: ${CONTAINER_WIDTH}px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 40px;
`
