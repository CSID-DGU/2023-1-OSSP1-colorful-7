/* eslint-disable  */
import { CommonHeader } from 'components/CommonHeader';
import { ProjectCard } from 'components/ProjectCard';
import projectListSampleJson from 'constants/json/project_list_sample.json';
import React, { FC, useState } from 'react';
import { ProjectListType, ProjectType } from 'types/project';
import { camelizeKey } from 'utils/camelizeKey';
import { ProjectCardContainer, Root, Container, SelectContainer, SearchBox, SearchContainer, SelectBox, TitleTypo } from './styled';

type ProjectListPageProps = {
  className?: string;
};

const projectListData = camelizeKey(projectListSampleJson.project_list) as ProjectListType;

type OptionType = {
  value: string;
  label: string;
};

type OptionNumberType = {
  value: number;
  label: string;
}

const projectTypeOptions: OptionType[] = [
  { value: "web", label: "WEB" },
  { value: "app", label: "APP" },
  { value: "etc", label: "ETC" },
];

const stackOptions: OptionType[] = [
  { value: "web_frontend", label: "웹 프론트엔드" },
  { value: "server_backend", label: "서버 백엔드" },
  { value: "app_client", label: "앱 클라이언트" },
  { value: "etc", label: "기타" },
];

const locationOptions: OptionNumberType[] = [
  { value: 0, label: "강원도" },
  { value: 1, label: "경기도" },
  { value: 2, label: "경상남도" },
  { value: 3, label: "경상북도" },
  { value: 4, label: "광주광역시" },
  { value: 5, label: "대구광역시" },
  { value: 6, label: "대전광역시" },
  { value: 7, label: "부산광역시" },
  { value: 8, label: "서울특별시" },
  { value: 9, label: "울산광역시" },
  { value: 10, label: "인천광역시" },
  { value: 11, label: "전라남도" },
  { value: 12, label: "전라북도" },
  { value: 13, label: "제주도" },
  { value: 14, label: "충청남도" },
  { value: 15, label: "충청북도" }
];

export const ProjectListPage: FC<ProjectListPageProps> = ({ className }) => {
  const [search, setSearch] = useState('')
  const [projectTypeSelect, setProjectTypeSelect] = useState('')
  const [stackTypeSelect, setStackTypeSelect] = useState('')
  const [locationTypeSelect, setLocationTypeSelect] = useState('')


  const filteredProjectListData = projectListData.filter(
    (projectItem) =>
      projectItem.title.toLowerCase().includes(search.toLowerCase()) &&
      projectItem.projectType.toLowerCase().includes(projectTypeSelect.toLowerCase()) &&
      projectItem.requireMemberList.some((member) => member.developmentStack.toLowerCase().includes(stackTypeSelect)) &&
      (locationTypeSelect === '' || projectItem.location === parseInt(locationTypeSelect))
  )

  const renderProjectList = () => {
    return (
      <ProjectCardContainer>
        {filteredProjectListData
          .sort((a, b) => a.key - b.key)
          .map((projectItem) => (
            <ProjectCard projectItem={projectItem} key={`project_card_${projectItem.key}`} />
          ))}
      </ProjectCardContainer>
    )
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value)
  }

  const handleProjectTypeSelectChange = (option: any) => {
    setProjectTypeSelect(option)
  }

  const handleStackTypeSelectChange = (option: any) => {
    setStackTypeSelect(option)
  }

  const handleLocationTypeSelectChange = (option: any) => {
    setLocationTypeSelect(option)
  }

  return (
    <Root className={className}>
      <CommonHeader />
      <Container>
        <SelectContainer>
          <TitleTypo>분야 검색</TitleTypo>
          <SelectBox onChange={(option) => handleProjectTypeSelectChange(option)} defaultValue="web" options={projectTypeOptions} />
        </SelectContainer>
        <SelectContainer>
          <TitleTypo>포지션 검색</TitleTypo>
          <SelectBox onChange={(option) => handleStackTypeSelectChange(option)} defaultValue="web_frontend" options={stackOptions} />
        </SelectContainer>
        <SelectContainer>
          <TitleTypo>지역 검색</TitleTypo>
          <SelectBox onChange={(option) => handleLocationTypeSelectChange(option)} defaultValue={0} options={locationOptions} />
        </SelectContainer>
      </Container>
      <Container>
        <SearchContainer>
          <TitleTypo>제목 검색</TitleTypo>
          <SearchBox
            type="search"
            id="psearch"
            name="psearch"
            maxLength={20}
            placeholder="제목 검색"
            onChange={handleSearchChange}
          />
        </SearchContainer>
      </Container>
      {renderProjectList()}
    </Root>
  )
}
