import { AxiosRequestConfig } from 'axios'
import { axiosPOST } from './base'
import { DevelopmentStackType } from 'types/project'

export type UserJoinRequestType = {
  id: string
	password: string
	nickname: string
	introduce: string
	email: string
	developmentStack : DevelopmentStackType
	grade : number
}

export type UserJoinResponseType = {
  status: "SUCCESS" | "FAILED"
	message?: string
}

export const userJoin = (url: string, data: UserJoinRequestType, config?: AxiosRequestConfig) => {
 return axiosPOST<UserJoinRequestType, UserJoinResponseType>(
    url,
    data,
    config
  )
}