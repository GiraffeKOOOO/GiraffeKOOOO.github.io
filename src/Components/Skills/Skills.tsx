import { FC, RefObject, useState } from 'react';
import { Typography } from '@mui/material';
import { SkillGraph, SkillOption } from 'Components/Shared/Types';
import ContentWrapper from 'Components/Shared/ContentWrapper';
import SkillsToggle from 'Components/Skills/SkilsToggle';
import SkillDisplay from 'Components/Skills/SkillDisplay';

type SkillsProps = {
  skillSectionRef: RefObject<HTMLDivElement | null>;
};

const Skills: FC<SkillsProps> = ({ skillSectionRef }) => {
  const [skillView, setSkillView] = useState<SkillGraph>(SkillGraph.spider);
  const [skillOption, setSkillOption] = useState<SkillOption>(SkillOption.programming);

  return (
    <ContentWrapper sectionRef={skillSectionRef} direction="column">
      <Typography sx={{ fontSize: '2.2rem' }}>Skills</Typography>
      <SkillsToggle skillView={skillView} setSkillView={setSkillView} />
      <SkillDisplay
        skillView={skillView}
        skillOption={skillOption}
        setSkillOption={setSkillOption}
      />
    </ContentWrapper>
  );
};

export default Skills;
