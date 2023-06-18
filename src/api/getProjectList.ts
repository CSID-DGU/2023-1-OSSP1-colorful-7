import { AxiosRequestConfig } from 'axios'
import { axiosGET } from './base'
import { ProjectListType } from 'types/project'

export type GetProjectListRequestType = {}

export type GetProjectListResponseType = {
  status: "SUCCESS" | "FAILED"
	message?: string
  projectList: ProjectListType
}

const getQueryPath = () => `/project/list`

export const getProjectList = (config?: AxiosRequestConfig) => {
 return axiosGET<GetProjectListRequestType, GetProjectListResponseType>(
    getQueryPath(),
    config
  )
}