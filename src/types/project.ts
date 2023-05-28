export type DevelopmentStackType = 'WEB_FRONTEND' | 'SERVER_BACKEND' | 'APP_CLIENT' | 'ETC'

export type ProjectRequireMemberType = {
  developmentStack: DevelopmentStackType
  recommendScore: number
  number: number
}

export type ProjectRequireMemberListType = ProjectRequireMemberType[]

export type ProjectType = 'WEB' | 'SERVER' | 'APP' | 'ETC'

export type ProjectPositionType = 'LEADER' | 'MEMBER' | 'NORMAL'

export type ProjectItemType = {
  key: number
  title: string
  representativeImg?: any
  projectType: ProjectType
  popularScore: number
  requireMemberList: ProjectRequireMemberListType
  visitedNumber: number
  likeNumber: number
  position: string
}

export type ProjectListType = ProjectItemType[]

export type ApplyProjectStatusType = 'PENDING' | 'BELONG' | 'REJECT'

export type ApplyProjectItemType = {
  status: ApplyProjectStatusType
} & ProjectItemType

export type ApplyProjectListType = ApplyProjectItemType[]

type ApplyMemberItemType = {
  userKey: number
  nickname: string
  developmentStack: DevelopmentStackType
  questionnaireScore: number
}

type ApplyMemberListType = ApplyMemberItemType[]

export type ManageProjectPositionType = 'LEADER' | 'MEMBER'

type ManageProjectItemType = {
  position: ManageProjectPositionType
} & ProjectItemType

type ExpireProjectItemType = {
  expireMemberList: ApplyMemberListType
} & ProjectItemType

export type ManageProjectListType = ManageProjectItemType[]

export type ExpireProjectListType = ExpireProjectItemType[]

export type UserInfoType = {
  nickname: string
  introduce: string
  developmentStack: DevelopmentStackType
  questionnaireKey: number
  questionnaireVersion: number
  questionnaireScore: number
}
