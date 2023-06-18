import { AxiosRequestConfig } from 'axios'
import { axiosGET } from './base'
import { ProjectDetailItemType } from 'types/project'

export type GetProjectDetailsRequestType = {
  projectKey: number
}

export type GetProjectDetailsResponseType = {
  ProjectDetailItemType: ProjectDetailItemType
  status: "SUCCESS" | "FAILED"
	message?: string
}

const getQueryPath = (params: GetProjectDetailsRequestType) => `/project/details/${params}`

export const getProjectDetails = (params: GetProjectDetailsRequestType, config?: AxiosRequestConfig) => {
 return axiosGET<GetProjectDetailsRequestType, GetProjectDetailsResponseType>(
    getQueryPath(params),
    params,
    config
  )
}