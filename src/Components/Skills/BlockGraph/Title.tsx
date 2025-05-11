import { FC } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { IconType } from 'react-icons/lib';
import { Colours } from 'Components/Shared/Colours';

type TitleProps = {
  title: string;
  icon?: IconType;
};

const Title: FC<TitleProps> = ({ title, icon }) => {
  return (
    <Stack direction="row" spacing={1} alignItems="center" sx={{ width: '11rem', height: '2rem' }}>
      <Box sx={{ color: Colours.white, fontSize: '1.7rem', display: 'inherit' }}>
        {icon && icon({})}
      </Box>
      <Typography sx={{ marginY: 'auto' }}>{title}</Typography>
    </Stack>
  );
};

export default Title;
