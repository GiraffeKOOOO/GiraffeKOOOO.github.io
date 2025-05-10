import { FC } from 'react';
import { Stack } from '@mui/material';
import Programming from 'Components/Skills/Programming/Programming';

const SkillDisplay: FC = () => {
  return (
    <Stack>
      <Programming />

      {/* <Data />
      <Testing />
      <Cicd />
      <General /> */}
    </Stack>
  );
};

export default SkillDisplay;
