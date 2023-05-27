import Avatar from 'assets/images/missing_avatar.png'
import { FC } from 'react'
import { Root, StackTag, UserIcon, UserNameTypo, UserTypeTypo } from './styled'
import { Button, List, Space } from 'antd'
// import { camelizeKey } from 'utils/camelizeKey'

type SearchMemberSectionProps = {
  className?: string
}
// 여기에 들어갈 json 데이터 정의 필요!
export const SearchMemberSection: FC<SearchMemberSectionProps> = ({ className }) => {
  return (
    <Root className={className}>
      <List
        dataSource={[
          {
            id: 1,
            name: 'Lily',
          },
          {
            id: 2,
            name: 'Lily',
          },
        ]}
        bordered
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              <Button type="primary" key={`a-${item.id}`}>
                초대
              </Button>,
            ]}
          >
            <List.Item.Meta
              avatar={<UserIcon src={Avatar} alt={'프로필 이미지'} />}
              title={
                <UserNameTypo>
                  {item.name}
                  <UserTypeTypo>분야 적기</UserTypeTypo>
                </UserNameTypo>
              }
              description={
                <Space size={[0, 'small']} wrap>
                  <StackTag>CSS</StackTag>
                  <StackTag>Javascript</StackTag>
                  <StackTag>HTML</StackTag>
                </Space>
              }
            />
          </List.Item>
        )}
      />
    </Root>
  )
}
