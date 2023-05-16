import { CommonHeader } from 'components/CommonHeader'
import { FC } from 'react'
import { Container, Root } from './styled'

type UserProjectManagePageProps = {
  className?: string
}

export const UserProjectManagePage: FC<UserProjectManagePageProps> = ({ className }) => {
  return (
    <Root className={className}>
      <CommonHeader />
      <Container>user project manage page</Container>
    </Root>
  )
}
