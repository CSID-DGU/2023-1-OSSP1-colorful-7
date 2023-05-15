import { FC } from 'react'
import { Root } from './styled'

type ProjectListPageProps = {
  className?: string
}

export const ProjectListPage: FC<ProjectListPageProps> = ({ className }) => {
  return <Root className={className}>ProjectListPage</Root>
}
