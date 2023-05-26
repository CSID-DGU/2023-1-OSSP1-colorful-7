// import { CommonHeader } from 'components/CommonHeader'
import { FC } from 'react'
import { Root } from './styled'
// import { camelizeKey } from 'utils/camelizeKey'

type SearchMemberSectionProps = {
  className?: string
}
// 여기에 들어갈 json 데이터 정의 필요!
export const SearchMemberSection: FC<SearchMemberSectionProps> = ({ className }) => {
  return <Root className={className}>추천멤버 조회</Root>
}
