import { FC } from 'react';
import { Stack, Typography } from '@mui/material';

const AboutSection: FC = () => {
  return (
    <Stack sx={{ width: '30rem' }}>
      <Typography
        align="left"
        sx={{ textDecoration: 'underline', textUnderlineOffset: '0.2rem', fontSize: '1.2rem' }}
      >
        About Me
      </Typography>
      <Typography align="left">
        I've been in to computers from when I was in kindergarten, playing Starsky & Hutch and Mario
        Forever. Fast forward 20 years, still glued to a screen however now with a slightly
        different reason. These days I prefer to make or work on software that makes other peoples'
        lives easier, or solves a problem they have. It's the reason I get up in the morning, and
        what keeps me up at night.
      </Typography>
    </Stack>
  );
};

export default AboutSection;
