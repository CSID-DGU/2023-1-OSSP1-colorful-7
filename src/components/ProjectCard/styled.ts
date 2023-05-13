import { Card, Space, Tag } from 'antd'
import Meta from 'antd/es/card/Meta'
import styled from 'styled-components'

export const Root = styled(Card)`
  width: 275px;
  height: 350px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  overflow: hidden;
  border: 1px #c9c9c955 solid;
`

export const RepresentativeImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

export const CardMeta = styled(Meta)``

export const DevelopmentStackTagContainer = styled(Space)`
  height: 50px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;
`

export const DevelopmentStackTag = styled(Tag)``
