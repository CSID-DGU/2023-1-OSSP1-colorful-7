import { AxiosRequestConfig } from 'axios'
import { axiosGET } from './base'
import { ProjectListType } from 'types/project'

export type MainInfoRequestType = {}

export type MainInfoResponseType = {
  recommendedProjectList: ProjectListType // 로그인이 되어있을 때만 보내주기
	popularProjectList: ProjectListType
	recentProjectList: ProjectListType
}

const getQueryPath = () => `/main/info`

export const mainInfo = (params: MainInfoRequestType, config?: AxiosRequestConfig) => {
 return axiosGET<MainInfoRequestType, MainInfoResponseType>(
    getQueryPath(),
    params,
    config
  )
}