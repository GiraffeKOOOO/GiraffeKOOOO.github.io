import { FC } from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import { SkillGraph } from 'Components/Shared/Types';
import Desktop from 'Components/Skills/Programming/Desktop';
import Mobile from 'Components/Skills/Programming/Mobile';
import Web from 'Components/Skills/Programming/Web';

type ProgrammingProps = {
  skillView: SkillGraph;
};

const Programming: FC<ProgrammingProps> = ({ skillView }) => {
  console.log(`TEST: `, skillView);
  return (
    <Stack sx={{ marginTop: '2rem' }}>
      <Grid container spacing={2}>
        <Grid size={4}>
          <Typography sx={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Desktop</Typography>
          <Desktop skillView={skillView} />
        </Grid>
        <Grid size={4}>
          <Typography sx={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Web</Typography>
          <Web skillView={skillView} />
        </Grid>
        <Grid size={4}>
          <Typography sx={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Mobile</Typography>
          <Mobile skillView={skillView} />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Programming;
