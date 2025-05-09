import { FC } from 'react';
import { IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Colours } from 'Components/Shared/Colours';

const ScrollButton: FC = () => {
  return (
    <IconButton
      aria-label="scroll to next section"
      sx={{
        marginTop: '4rem',
        height: '4rem',
        width: '4rem',
        backgroundColor: Colours.transparent,
        border: `1px solid ${Colours.navButton}`,
        color: Colours.navButton,
        '&:hover': {
          backgroundColor: Colours.scrollButton,
          color: Colours.scrollButtonChevronHover,
          border: 'none',
        },
      }}
      onClick={() => {
        // TODO: implement going to ref here / page
        console.log('test');
      }}
    >
      <ExpandMoreIcon fontSize="large" />
    </IconButton>
  );
};

export default ScrollButton;
