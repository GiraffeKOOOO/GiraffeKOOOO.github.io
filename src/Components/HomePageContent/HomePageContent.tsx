import { FC } from 'react';
import { Stack, Typography } from '@mui/material';

const HomePageContent: FC = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ height: '100vh' }}
    >
      <Stack
        direction="column"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ width: '60%' }}
      >
        <h1>Welcome to my portfolio</h1>
        <h2>My name is John Doe</h2>
        <h3>I am a software engineer</h3>
      </Stack>
      <Stack
        direction="column"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ width: '40%' }}
      >
        <Typography>section 1</Typography>
        <Typography>section 1</Typography>
        <Typography>section 1</Typography>
      </Stack>
    </Stack>
  );
};

export default HomePageContent;
