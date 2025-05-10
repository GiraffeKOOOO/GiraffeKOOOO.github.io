import { FC } from 'react';
import { Stack } from '@mui/material';
import SkillsToggle from 'Components/Skills/SkilsToggle';

const Skills: FC = () => {
  return (
    <Stack direction="column" sx={{}}>
      <SkillsToggle />
      {/* <SkillDisplay /> */}
    </Stack>
  );
};

export default Skills;
