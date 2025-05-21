import { FC, RefObject } from 'react';
import { Typography } from '@mui/material';
import ContentWrapper from 'Components/Shared/ContentWrapper';

type WorkExperienceProps = {
  workExperienceSectionRef: RefObject<HTMLDivElement | null>;
};

const WorkExperience: FC<WorkExperienceProps> = ({ workExperienceSectionRef }) => {
  return (
    <ContentWrapper sectionRef={workExperienceSectionRef} direction="column">
      <Typography sx={{ fontSize: '2.2rem' }}>Work Experience</Typography>
    </ContentWrapper>
  );
};

export default WorkExperience;
