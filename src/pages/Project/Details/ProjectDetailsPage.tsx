import { FC } from 'react'
import { Root } from './styled'

type ProjectDetailsPageProps = {
  className?: string
}

export const ProjectDetailsPage: FC<ProjectDetailsPageProps> = ({ className }) => {
  return <Root className={className}>ProjectDetailsPage</Root>
}
