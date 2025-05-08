import { FC } from 'react';
import { Button } from '@mui/material';
import { NavButtonName } from 'Components/Shared/Types';
import { Colours } from 'Components/Shared/Colours';

type NavButtonProps = {
  btnName: NavButtonName;
};

const NavButton: FC<NavButtonProps> = ({ btnName }) => {
  return (
    <Button
      variant="text"
      sx={{
        textTransform: 'none',
        paddingX: '1rem',
        backgroundColor: Colours.transparent,
        color: Colours.navButton,
        '&:hover': {
          color: Colours.white,
        },
      }}
      onClick={() => {
        // TODO: implement going to ref here / page
        console.log('test');
      }}
    >
      {btnName}
    </Button>
  );
};

export default NavButton;
