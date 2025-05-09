import { FC } from 'react';
import { Stack, Typography } from '@mui/material';

const CurrentRoleSection: FC = () => {
  return (
    <Stack sx={{ width: '30rem' }}>
      <Typography
        align="left"
        sx={{ textDecoration: 'underline', textUnderlineOffset: '0.2rem', fontSize: '1.2rem' }}
      >
        Current Role
      </Typography>
      <Typography align="left">Software Engineer Level 2 at Redwood Technologies Ltd</Typography>
      <Typography align="left">
        Developing features for both Front and Back end, prominently in React and Dotnet as part of
        an Agile team
      </Typography>
    </Stack>
  );
};

export default CurrentRoleSection;
