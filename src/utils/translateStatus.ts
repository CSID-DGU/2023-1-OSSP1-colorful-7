import { ApplyProjectStatusType } from 'types/project'

export const translateApplyProjectStatus = (status: ApplyProjectStatusType) => {
  if (status === 'PENDING') {
    return '대기'
  }
  if (status === 'BELONG') {
    return '수락'
  }
  if (status === 'REJECT') {
    return '거절'
  }
}

export const getApplyProjectStatusColor = (status: ApplyProjectStatusType) => {
  if (status === 'PENDING') {
    return '#87d068'
  }
  if (status === 'BELONG') {
    return '#2db7f5'
  }
  if (status === 'REJECT') {
    return '#f50'
  }
}
