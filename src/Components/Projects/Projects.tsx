import { FC, RefObject } from 'react';
import { Typography } from '@mui/material';
import ContentWrapper from 'Components/Shared/ContentWrapper';
import ProjectList from 'Components/Projects/ProjectList';
import ProjectRow from 'Components/Projects/ProjectRow';

type ProjectProps = {
  projectSectionRef: RefObject<HTMLDivElement | null>;
};

const Projects: FC<ProjectProps> = ({ projectSectionRef }) => {
  const first3 = ProjectList.slice(0, 3);

  return (
    <ContentWrapper sectionRef={projectSectionRef} direction="column">
      <Typography sx={{ fontSize: '2.2rem' }}>Projects</Typography>
      <ProjectRow projects={first3} />
      {/* <ProjectRow projects={second3}/> */}
    </ContentWrapper>
  );
};

export default Projects;
