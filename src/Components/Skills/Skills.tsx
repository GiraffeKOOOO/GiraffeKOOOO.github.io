import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import SkillsToggle from 'Components/Skills/SkilsToggle';

const Skills: FC = () => {
  return (
    <Stack direction="column" spacing={4}>
      <Typography sx={{ fontSize: '2.2rem' }}>Skills</Typography>
      <SkillsToggle />
      {/* <SkillDisplay /> */}
    </Stack>
  );
};

export default Skills;
