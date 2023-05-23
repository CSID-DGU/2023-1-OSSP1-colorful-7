import projectTitleIconImg from 'assets/images/project/titleIcon.png'
import { CommonHeader } from 'components/CommonHeader'
import { FC } from 'react'
import {
  Container,
  ProjectOptionContainer,
  Root,
  TitleContainer,
  TitleLogoImg,
  TitleTypo,
  InputTitle,
  ProjectOptionLeftContainer,
  ProjectOptionRightContainer,
  InputContainer,
  DateTermIcon,
  LeaderPositionContainer,
  InputTitleRequired,
  SearchContainer,
} from './styled'
// antd 적용하기
import { AutoComplete, Form, Input, Select, Checkbox, Col, Row, DatePicker } from 'antd'
import { CreateProjectSection } from './CreateProjectSection'

const renderTitle = (title: string) => <span>{title}</span>

const renderItem = (title: string) => ({
  value: title,
  label: (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {title}
    </div>
  ),
})

const { Option } = Select

const Stackoptions = [
  {
    label: renderTitle('프론트'),
    options: [renderItem('Vue.js'), renderItem('React.js')],
  },
  {
    label: renderTitle('백엔드'),
    options: [renderItem('Node.js'), renderItem('SpringBoot')],
  },
  {
    label: renderTitle('디자인'),
    options: [renderItem('AntDesign design language')],
  },
]

type UserProjectCreatePageProps = {
  className?: string
}
// 아니 근데 제목 입력 받는 부분 필요해...ㅠ
// 목적이랑 분야는 중복 선택 가능한가??
export const UserProjectCreatePage: FC<UserProjectCreatePageProps> = ({ className }) => {
  return (
    <Root className={className}>
      <CommonHeader />
      <Container>
        <TitleContainer>
          <TitleLogoImg src={projectTitleIconImg} alt={'요즘 뜨는 프로젝트 로고 이미지'} />
          <TitleTypo>프로젝트 생성하기</TitleTypo>
        </TitleContainer>
        <ProjectOptionContainer>
          <ProjectOptionLeftContainer>
            <Form layout="vertical" autoComplete="off">
              <Form.Item style={{ marginBottom: 0 }}>
                <InputTitleRequired>모집인원</InputTitleRequired>
                <Form.Item name="part" style={{ display: 'inline-block', width: 'calc(70% - 8px)' }}>
                  <Select placeholder="포지션">
                    <Option value="프론트">프론트</Option>
                    <Option value="백엔드">백엔드</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="number" style={{ display: 'inline-block', width: 'calc(30% - 8px)', margin: '0 8px' }}>
                  <Input placeholder="인원" />
                </Form.Item>
              </Form.Item>
              <Form.Item>
                <InputTitleRequired>목적</InputTitleRequired>
                <Checkbox.Group>
                  <Row style={{ flexFlow: 'row nowrap' }}>
                    <Col span={8}>
                      <Checkbox value="A" style={{ lineHeight: '32px' }}>
                        공모전
                      </Checkbox>
                    </Col>
                    <Col span={12}>
                      <Checkbox value="B" style={{ lineHeight: '32px' }}>
                        토이프로젝트
                      </Checkbox>
                    </Col>
                    <Col span={8}>
                      <Checkbox value="C" style={{ lineHeight: '32px' }}>
                        창업
                      </Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Form.Item>
            </Form>
          </ProjectOptionLeftContainer>
          <ProjectOptionRightContainer>
            <Form layout="vertical" autoComplete="off">
              <InputContainer>
                <LeaderPositionContainer>
                  <InputTitleRequired>팀장 포지션</InputTitleRequired>
                  <Form.Item name="leader-position">
                    <Select placeholder="팀장 포지션">
                      <Option value="프론트">프론트</Option>
                      <Option value="백엔드">백엔드</Option>
                    </Select>
                  </Form.Item>
                </LeaderPositionContainer>
                <div>
                  <InputTitleRequired>프로젝트 기간</InputTitleRequired>
                  <InputContainer>
                    <Form.Item style={{ display: 'inline-block' }}>
                      <DatePicker placeholder="시작 날짜" />
                    </Form.Item>
                    <DateTermIcon>~</DateTermIcon>
                    <Form.Item style={{ display: 'inline-block' }}>
                      <DatePicker placeholder="종료 날짜" />
                    </Form.Item>
                  </InputContainer>
                </div>
              </InputContainer>
              <Form.Item>
                <InputTitleRequired>분야</InputTitleRequired>
                <Checkbox.Group>
                  <Row style={{ flexFlow: 'row nowrap' }}>
                    <Col span={10}>
                      <Checkbox value="A" style={{ lineHeight: '32px' }}>
                        프론트
                      </Checkbox>
                    </Col>
                    <Col span={10}>
                      <Checkbox value="B" style={{ lineHeight: '32px' }}>
                        백엔드
                      </Checkbox>
                    </Col>
                    <Col span={10}>
                      <Checkbox value="C" style={{ lineHeight: '32px' }}>
                        데브옵스
                      </Checkbox>
                    </Col>
                  </Row>
                </Checkbox.Group>
              </Form.Item>
            </Form>
          </ProjectOptionRightContainer>
        </ProjectOptionContainer>
        <SearchContainer>
          <div>
            <InputTitle>기술스택 입력</InputTitle>
            <AutoComplete
              popupClassName="certain-category-search-dropdown"
              dropdownMatchSelectWidth={300}
              style={{ width: 250 }}
              options={Stackoptions}
            >
              <Input.Search size="large" placeholder="기술스택 입력" />
            </AutoComplete>
          </div>
          <div>
            <InputTitle>지역</InputTitle>
            <Select size="large" placeholder="지역 선택" style={{ width: 200 }}>
              <Option value="서울특별시">서울특별시</Option>
              <Option value="경기도">경기도</Option>
            </Select>
          </div>
        </SearchContainer>
        <CreateProjectSection />
      </Container>
    </Root>
  )
}
