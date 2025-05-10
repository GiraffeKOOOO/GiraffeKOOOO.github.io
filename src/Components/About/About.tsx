import { FC, RefObject } from 'react';
import { Stack } from '@mui/material';
import NameSection from 'Components/About/NameSection';
import DescriptionSection from 'Components/About/DescriptionSection';
import bannerImage from 'Assets/pbs-transparent.png';

type HomePageContentProps = {
  skillSectionRef: RefObject<HTMLDivElement | null>;
};

const About: FC<HomePageContentProps> = ({ skillSectionRef }) => {
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
      <NameSection skillSectionRef={skillSectionRef} />
      <DescriptionSection />
    </Stack>
  );
};

export default About;
