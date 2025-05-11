import { FC } from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import { SkillGraph } from 'Components/Shared/Types';
import Cicd from 'Components/Skills/Development/Cicd';
import Data from 'Components/Skills/Development/Data';
import Testing from 'Components/Skills/Development/Testing';

type DevelopmentProps = {
  skillView: SkillGraph;
};

const Development: FC<DevelopmentProps> = ({ skillView }) => {
  return (
    <Stack sx={{ marginTop: '2rem' }}>
      <Grid container spacing={2}>
        <Grid size={4}>
          <Typography sx={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Data</Typography>
          <Data skillView={skillView} />
        </Grid>
        <Grid size={4}>
          <Typography sx={{ fontSize: '2.2rem', marginBottom: '1rem' }}>CI/CD</Typography>
          <Cicd skillView={skillView} />
        </Grid>
        <Grid size={4}>
          <Typography sx={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Testing</Typography>
          <Testing skillView={skillView} />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Development;
