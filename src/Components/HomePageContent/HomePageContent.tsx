import { FC, RefObject } from 'react';
import { Stack } from '@mui/material';
import NameSection from 'Components/HomePageContent/NameSection';
import DescriptionSection from 'Components/HomePageContent/DescriptionSection';
import bannerImage from 'Assets/pbs-transparent.png';
import Skills from 'Components/Skills/Skills';

type HomePageContentProps = {
  skillSectionRef: RefObject<HTMLDivElement | null>;
};

const HomePageContent: FC<HomePageContentProps> = ({ skillSectionRef }) => {
  return (
    <>
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
      <Stack
        ref={skillSectionRef}
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{
          height: '100vh',
        }}
      >
        <Skills />
      </Stack>
    </>
  );
};

export default HomePageContent;
