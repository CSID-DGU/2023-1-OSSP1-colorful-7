import { CommonHeader } from 'components/CommonHeader'
import { FC } from 'react'
import { Container, Root } from './styled'

type UserProjectCreatePageProps = {
  className?: string
}

export const UserProjectCreatePage: FC<UserProjectCreatePageProps> = ({ className }) => {
  return (
    <Root className={className}>
      <CommonHeader />
      <Container>user project create page</Container>
    </Root>
  )
}
