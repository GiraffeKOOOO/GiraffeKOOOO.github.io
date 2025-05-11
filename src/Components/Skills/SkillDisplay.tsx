import { FC } from 'react';
import { Stack } from '@mui/material';
import { SkillGraph } from 'Components/Shared/Types';
import Programming from 'Components/Skills/Programming/Programming';

type SkillDisplayProps = {
  skillView: SkillGraph;
};

const SkillDisplay: FC<SkillDisplayProps> = () => {
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
