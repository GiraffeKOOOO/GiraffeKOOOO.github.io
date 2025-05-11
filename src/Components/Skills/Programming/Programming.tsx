import { FC } from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import Desktop from 'Components/Skills/Programming/Desktop';
import Mobile from 'Components/Skills/Programming/Mobile';
import Web from 'Components/Skills/Programming/Web';

const Programming: FC = () => {
  return (
    <Stack sx={{ marginTop: '2rem' }}>
      <Grid container spacing={2}>
        <Grid size={4}>
          <Typography sx={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Desktop</Typography>
          <Desktop />
        </Grid>
        <Grid size={4}>
          <Typography sx={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Web</Typography>
          <Web />
        </Grid>
        <Grid size={4}>
          <Typography sx={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Mobile</Typography>
          <Mobile />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Programming;
