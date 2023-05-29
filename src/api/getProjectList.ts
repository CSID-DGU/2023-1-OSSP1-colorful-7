import { AxiosRequestConfig } from 'axios'
import { axiosGET } from './base'
import { ProjectListType } from 'types/project'

export type GetProjectListRequestType = {
  type: "RECOMMEND" | "POPULAR" | "RECENT"
  page: number
}

export type GetProjectListResponseType = {
  projectList: ProjectListType
}

const getQueryPath = (params: GetProjectListRequestType) => `/project/list`

export const getProjectList = (params: GetProjectListRequestType, config?: AxiosRequestConfig) => {
 return axiosGET<GetProjectListRequestType, GetProjectListResponseType>(
    getQueryPath(params),
    params,
    config
  )
}