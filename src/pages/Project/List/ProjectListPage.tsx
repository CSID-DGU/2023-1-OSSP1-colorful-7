/* eslint-disable  */
import { CommonHeader } from 'components/CommonHeader';
import { ProjectCard } from 'components/ProjectCard';
import projectListSampleJson from 'constants/json/project_list_sample.json';
import React, { FC, useState } from 'react';
import { ProjectListType, ProjectType } from 'types/project';
import { camelizeKey } from 'utils/camelizeKey';
import { ProjectCardContainer, Root, Container, SelectContainer, SearchBox, SearchContainer, SelectBox } from './styled';

type ProjectListPageProps = {
  className?: string;
};

const projectListData = camelizeKey(projectListSampleJson.project_list) as ProjectListType;

type OptionType = {
  value: string;
  label: string;
};

const options: OptionType[] = [
  { value: "web", label: "WEB" },
  { value: "app", label: "APP" },
  { value: "etc", label: "ETC" },
];

export const ProjectListPage: FC<ProjectListPageProps> = ({ className }) => {
  const [search, setSearch] = useState('')
  const [select, setSelect] = useState('')

  const filteredProjectListData = projectListData.filter(
    (projectItem) =>
      projectItem.title.toLowerCase().includes(search.toLowerCase()) &&
      projectItem.projectType.toLowerCase().includes(select.toLowerCase())
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
  
  const handleSelectChange = (option: ValueType<OptionType>) => {
    setSelect(option);
  }

  return (
    <Root className={className}>
      <CommonHeader />
      <Container>
        <SelectContainer>
          <SelectBox
            onChange={(option) => handleSelectChange(option)}
            defaultValue="web"
            options={[
              { value: 'web', label: 'WEB' },
              { value: 'app', label: 'APP' },
              { value: 'etc', label: 'ETC' },
            ]}
          />
        </SelectContainer>
        <SearchContainer>
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
