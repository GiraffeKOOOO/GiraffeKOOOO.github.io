import { FC } from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import Cicd from 'Components/Skills/Development/Cicd';

const Development: FC = () => {
  return (
    <Stack sx={{ marginTop: '2rem' }}>
      <Grid container spacing={2}>
        <Grid size={4}>
          <Typography sx={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Data</Typography>
          {/* <Desktop /> */}
        </Grid>
        <Grid size={4}>
          <Typography sx={{ fontSize: '2.2rem', marginBottom: '1rem' }}>CI/CD</Typography>
          <Cicd />
        </Grid>
        <Grid size={4}>
          <Typography sx={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Testing</Typography>
          {/* <Mobile /> */}
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Development;
