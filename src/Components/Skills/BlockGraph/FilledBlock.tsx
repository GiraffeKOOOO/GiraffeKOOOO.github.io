import { FC } from 'react';
import { Box } from '@mui/material';
import { Colours } from 'Components/Shared/Colours';

const FilledBlock: FC = () => {
  return (
    <Box
      width="1.2rem"
      height="1.2rem"
      sx={{ backgroundColor: Colours.white, border: `1px solid ${Colours.white}` }}
    />
  );
};

export default FilledBlock;
