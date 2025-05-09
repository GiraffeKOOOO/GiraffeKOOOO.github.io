import { FC } from 'react';
import { Stack } from '@mui/material';
import NameSection from 'Components/HomePageContent/NameSection';
import DescriptionSection from 'Components/HomePageContent/DescriptionSection';

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
      <DescriptionSection />
    </Stack>
  );
};

export default HomePageContent;
