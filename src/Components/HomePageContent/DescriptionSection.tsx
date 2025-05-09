import { FC } from 'react';
import { Stack } from '@mui/material';
import AboutSection from 'Components/HomePageContent/AboutSection';
import CurrentRoleSection from 'Components/HomePageContent/CurrentRoleSection';
import SocialsSection from 'Components/HomePageContent/SocialsSection';

const DescriptionSection: FC = () => {
  return (
    <Stack
      direction="column"
      spacing={8}
      justifyContent="center"
      alignItems="center"
      sx={{ width: '40%' }}
    >
      <AboutSection />
      <CurrentRoleSection />
      <SocialsSection />
    </Stack>
  );
};

export default DescriptionSection;
