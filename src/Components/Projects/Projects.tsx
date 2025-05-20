import { FC, RefObject, useState } from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import { Fade } from 'react-awesome-reveal';
import ContentWrapper from 'Components/Shared/ContentWrapper';
import ProjectList from 'Components/Projects/ProjectList';
import ProjectRow from 'Components/Projects/ProjectRow';
import MoreProjectsButton from 'Components/Projects/MoreProjectsButton';
import GithubButton from 'Components/Projects/GithubButton';

type ProjectProps = {
  projectSectionRef: RefObject<HTMLDivElement | null>;
};

const Projects: FC<ProjectProps> = ({ projectSectionRef }) => {
  const firstSet = ProjectList.slice(0, 3);
  const secondSet = ProjectList.slice(3, 6);
  const [showSecondSet, setShowSecondSet] = useState<boolean>(false);

  return (
    <ContentWrapper sectionRef={projectSectionRef} direction="column">
      <Grid container width={'80vw'} alignItems="center">
        <Grid size={10}>
          <Typography sx={{ fontSize: '2.2rem', marginRight: '-18rem' }}>Projects</Typography>
        </Grid>
        <Grid size={2}>{!showSecondSet && <GithubButton />}</Grid>
      </Grid>
      <ProjectRow projects={firstSet} />
      {showSecondSet && (
        <Fade delay={200} duration={1000} fraction={0.5} triggerOnce>
          <ProjectRow projects={secondSet} />
        </Fade>
      )}
      <Stack sx={{ paddingTop: '1rem' }}>
        {showSecondSet ? (
          <GithubButton />
        ) : (
          <MoreProjectsButton
            setShowSecondSet={setShowSecondSet}
            projectSectionRef={projectSectionRef}
          />
        )}
      </Stack>
    </ContentWrapper>
  );
};

export default Projects;
