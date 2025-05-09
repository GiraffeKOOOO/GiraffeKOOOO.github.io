import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import SocialsButton from 'Components/HomePageContent/SocialsButton';
import { SocialsButtonName } from 'Components/Shared/Types';

const SocialsSection: FC = () => {
  return (
    <Stack direction="column" sx={{ width: '30rem' }}>
      <Typography align="left" sx={{ fontSize: '1.2rem' }}>
        Find me on
      </Typography>
      <Stack direction="row">
        <SocialsButton btnName={SocialsButtonName.gitHub} />
        <SocialsButton btnName={SocialsButtonName.linkedIn} />
      </Stack>
    </Stack>
  );
};

export default SocialsSection;
