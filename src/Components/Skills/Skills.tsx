import { FC, RefObject } from 'react';
import { Typography } from '@mui/material';
import SkillsToggle from 'Components/Skills/SkilsToggle';
import ContentWrapper from 'Components/Shared/ContentWrapper';

type SkillsProps = {
  skillSectionRef: RefObject<HTMLDivElement | null>;
};

const Skills: FC<SkillsProps> = ({ skillSectionRef }) => {
  return (
    <ContentWrapper sectionRef={skillSectionRef} direction="column">
      <Typography sx={{ fontSize: '2.2rem' }}>Skills</Typography>
      <SkillsToggle />
      {/* <SkillDisplay /> */}
    </ContentWrapper>
  );
};

export default Skills;
