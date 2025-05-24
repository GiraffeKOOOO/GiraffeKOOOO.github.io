import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import { Colours } from 'Components/Shared/Colours';
import { BsBriefcaseFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';

type AccordionTextComponentProps = {
  component: 'role' | 'company';
  text: string;
};

const AccordionTextComponent: FC<AccordionTextComponentProps> = ({ component, text }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{ marginLeft: component === 'company' ? '0.7rem' : '0.9rem', marginTop: '0.5rem' }}
    >
      {component === 'company' ? (
        <BsBriefcaseFill style={{ color: Colours.white, fontSize: '1.5rem' }} />
      ) : (
        <FaUserCircle style={{ color: Colours.white, fontSize: '1.4rem' }} />
      )}

      <Typography
        align="left"
        sx={{
          color: Colours.white,
          fontSize: component === 'company' ? '1.3rem' : '1.2rem',
        }}
      >
        {text}
      </Typography>
    </Stack>
  );
};

export default AccordionTextComponent;
