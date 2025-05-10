import { FC, RefObject } from 'react';
import { Stack, Typography } from '@mui/material';
import ScrollButton from 'Components/HomePageContent/ScrollButton';
import { Colours } from 'Components/Shared/Colours';

type NameSectionRef = {
  skillSectionRef: RefObject<HTMLDivElement | null>;
};

const NameSection: FC<NameSectionRef> = ({ skillSectionRef }) => {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center" sx={{ width: '60%' }}>
      <Typography sx={{ fontSize: '5rem' }}>Hi I'm Paskal, a</Typography>
      <Typography sx={{ fontSize: '5rem', marginTop: '-1.5rem', marginBottom: '0.5rem' }}>
        Software Engineer
      </Typography>
      <Typography sx={{ fontSize: '1.5rem', color: Colours.navButton }}>
        MSc | BSc Software Engineering First Class Graduate
      </Typography>
      <ScrollButton skillSectionRef={skillSectionRef} />
    </Stack>
  );
};

export default NameSection;
