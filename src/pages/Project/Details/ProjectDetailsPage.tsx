import projectListSampleJson from 'constants/json/project_list_sample.json'
import { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProjectItemType, ProjectListType } from 'types/project'
import { camelizeKey } from 'utils/camelizeKey'
import { Root } from './styled'

type ProjectDetailsPageProps = {
  className?: string
}

export const ProjectDetailsPage: FC<ProjectDetailsPageProps> = ({ className }) => {
  const { projectKey = 0 } = useParams()
  const projectListSampleData: ProjectListType = camelizeKey(projectListSampleJson) as ProjectListType
  const [projectItemData, setProjectItemData] = useState<ProjectItemType>()

  useEffect(() => {
    setProjectItemData(projectListSampleData[+projectKey])
  }, [])

  return <Root className={className}>{projectItemData?.title}</Root>
}
