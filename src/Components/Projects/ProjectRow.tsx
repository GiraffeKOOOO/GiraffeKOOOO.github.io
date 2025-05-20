import { FC } from 'react';
import { Stack } from '@mui/material';
import { Project } from 'Components/Shared/Types';
import ProjectCard from 'Components/Projects/ProjectCard';

type ProjectRowProps = {
  projects: Project[];
};

const ProjectRow: FC<ProjectRowProps> = ({ projects }) => {
  return (
    <Stack direction="row" spacing={8} sx={{ paddingTop: '2rem' }}>
      {projects.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </Stack>
  );
};

export default ProjectRow;
