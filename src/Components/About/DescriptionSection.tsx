import { FC } from 'react';
import { Stack } from '@mui/material';
import AboutSection from 'Components/About/AboutSection';
import CurrentRoleSection from 'Components/About/CurrentRoleSection';
import SocialsSection from 'Components/About/SocialsSection';

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
