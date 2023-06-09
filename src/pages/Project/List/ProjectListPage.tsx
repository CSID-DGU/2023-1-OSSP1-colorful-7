import { CommonHeader } from 'components/CommonHeader';
import { ProjectCard } from 'components/ProjectCard';
import projectListSampleJson from 'constants/json/project_list_sample.json';
import React, { FC, useState } from 'react';
import { ProjectListType } from 'types/project';
import { camelizeKey } from 'utils/camelizeKey';
import { ProjectCardContainer, Root, SearchBox, SearchContainer } from './styled';

type ProjectListPageProps = {
  className?: string;
};

const projectListData = camelizeKey(projectListSampleJson.project_list) as ProjectListType;

export const ProjectListPage: FC<ProjectListPageProps> = ({ className }) => {
  const [search, setSearch] = useState('');

  const filteredProjectListData = projectListData.filter((projectItem) =>
    projectItem.title.toLowerCase().includes(search.toLowerCase())
  );

  const renderProjectList = () => {
    return (
      <ProjectCardContainer>
        {filteredProjectListData
          .sort((a, b) => a.key - b.key)
          .map((projectItem) => (
            <ProjectCard projectItem={projectItem} key={`project_card_${projectItem.key}`} />
          ))}
      </ProjectCardContainer>
    );
  };
  
  //@ts-ignore
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  };  

  return (
    <Root className={className}>
      <CommonHeader />
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
      {renderProjectList()}
    </Root>
  );
};
