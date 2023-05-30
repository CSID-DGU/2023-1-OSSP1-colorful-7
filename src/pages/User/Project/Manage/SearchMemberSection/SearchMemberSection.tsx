import Avatar from 'assets/images/missing_avatar.png'
import { FC } from 'react'
import { Root, StackTag, UserIcon, UserNameTypo } from './styled'
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
            stack: '프론트엔드',
          },
          {
            id: 2,
            name: 'Mily',
            stack: '백엔드',
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
              title={<UserNameTypo>{item.name}</UserNameTypo>}
              description={
                <Space size={[0, 'small']} wrap>
                  <StackTag>{item.stack}</StackTag>
                </Space>
              }
            />
          </List.Item>
        )}
      />
    </Root>
  )
}
