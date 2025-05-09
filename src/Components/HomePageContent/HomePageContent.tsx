import { FC } from 'react';
import { Stack } from '@mui/material';
import NameSection from 'Components/HomePageContent/NameSection';
import DescriptionSection from 'Components/HomePageContent/DescriptionSection';
import bannerImage from 'Assets/pbs-transparent.png';

const HomePageContent: FC = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{
        height: '100vh',
        // TODO: correct this image
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: '55rem 55rem',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '48% 90%',
      }}
    >
      <NameSection />
      <DescriptionSection />
    </Stack>
  );
};

export default HomePageContent;
