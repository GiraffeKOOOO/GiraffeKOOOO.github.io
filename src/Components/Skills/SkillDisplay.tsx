import { FC } from 'react';
import { Grid } from '@mui/material';
import { SkillGraph, SkillOption } from 'Components/Shared/Types';
import SkillOptions from 'Components/Skills/SkillOptions/SkillOptions';
import Charts from 'Components/Skills/Charts';

type SkillDisplayProps = {
  skillView: SkillGraph;
  skillOption: SkillOption;
  setSkillOption: (value: SkillOption) => void;
};

const SkillDisplay: FC<SkillDisplayProps> = ({ skillView, skillOption, setSkillOption }) => {
  return (
    <Grid container spacing={2} sx={{ width: '100vw' }}>
      <Grid size={10} sx={{ marginLeft: '2rem', marginRight: '-2rem' }}>
        <Charts skillOption={skillOption} skillView={skillView} />
      </Grid>
      <Grid size={2} sx={{ marginY: 'auto' }}>
        <SkillOptions skillOption={skillOption} setSkillOption={setSkillOption} />
      </Grid>
    </Grid>
  );
};

export default SkillDisplay;
