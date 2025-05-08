import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import NameSection from 'Components/HomePageContent/NameSection';

const HomePageContent: FC = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ height: '100vh' }}
    >
      <NameSection />
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
