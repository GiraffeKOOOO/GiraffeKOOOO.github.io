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
        Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
        ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
        ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
      </Typography>
    </Stack>
  );
};

export default AboutSection;
