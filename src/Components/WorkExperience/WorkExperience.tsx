import { FC, RefObject } from 'react';
import { Stack, Typography } from '@mui/material';
import ContentWrapper from 'Components/Shared/ContentWrapper';
import WorkExperienceList from 'Components/WorkExperience/WorkExperienceList';
import WorkExperienceAccordion from 'Components/WorkExperience/WorkExperienceAccordion';

type WorkExperienceProps = {
  workExperienceSectionRef: RefObject<HTMLDivElement | null>;
};

const WorkExperience: FC<WorkExperienceProps> = ({ workExperienceSectionRef }) => {
  return (
    <ContentWrapper sectionRef={workExperienceSectionRef} direction="column" customHeight={1700}>
      <Typography sx={{ fontSize: '2.2rem' }}>Work Experience</Typography>
      <Stack sx={{ paddingY: '2rem' }}>
        {WorkExperienceList.map((workExperience) => {
          return <WorkExperienceAccordion workExperience={workExperience} />;
        })}
      </Stack>
    </ContentWrapper>
  );
};

export default WorkExperience;
