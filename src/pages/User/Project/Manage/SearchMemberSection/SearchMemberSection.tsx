import Avatar from 'assets/images/missing_avatar.png'
import { FC } from 'react'
import userListSampleJson from 'constants/json/user_list_sample.json';
import { Root, StackTag, UserIcon, UserNameTypo } from './styled'
import { Button, List, Space } from 'antd'
import { UserInfoListType } from 'types/project'
import { camelizeKey } from 'utils/camelizeKey'

type SearchMemberSectionProps = {
  className?: string
}

const userListData = camelizeKey(userListSampleJson.user_list) as UserInfoListType;

// 여기에 들어갈 json 데이터 정의 필요!
export const SearchMemberSection: FC<SearchMemberSectionProps> = ({ className }) => {
  const filteredUserListData = userListData.filter(
    (userItem) => 
      userItem.userId++ &&
      userItem.nickname.toLowerCase() &&
      userItem.developmentStackList
  )
  return (
    <Root className={className}>
      <List
        dataSource={filteredUserListData}
        bordered
        renderItem={(item) => (
          <List.Item
            key={item.userId}
            actions={[
              <Button type="primary" key={`a-${item.userId}`}>
                초대
              </Button>,
            ]}
          >
            <List.Item.Meta
              avatar={<UserIcon src={Avatar} alt={'프로필 이미지'} />}
              title={<UserNameTypo>{item.nickname}</UserNameTypo>}
              description={
                <Space size={[0, 'small']} wrap>
                  {item.developmentStackList
                    .map((stack) => (
                      <StackTag key={stack.stackId}>{stack.developmentStack}</StackTag>
                    ))
                  }
                </Space>
              }
            />
          </List.Item>
        )}
      />
    </Root>
  )
}
