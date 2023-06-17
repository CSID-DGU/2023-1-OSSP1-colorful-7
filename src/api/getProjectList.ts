import { AxiosRequestConfig } from 'axios'
import { axiosGET } from './base'

export type GetProjectListRequestType = {}

export type GetProjectListResponseType = {}

const getQueryPath = () => `/project/list`

export const getProjectList = (config?: AxiosRequestConfig) => {
 return axiosGET<GetProjectListRequestType, GetProjectListResponseType>(
    getQueryPath(),
    config
  )
}