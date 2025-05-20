import { FC, RefObject } from 'react';
import { Button } from '@mui/material';
import { NavButtonName } from 'Components/Shared/Types';
import { Colours } from 'Components/Shared/Colours';

type NavButtonProps = {
  btnName: NavButtonName;
  sectionRef?: RefObject<HTMLDivElement | null>;
  cv?: boolean;
};

const NavButton: FC<NavButtonProps> = ({ btnName, sectionRef, cv }) => {
  return (
    <Button
      variant="text"
      sx={{
        textTransform: 'none',
        fontSize: '1.1rem',
        paddingX: '1rem',
        backgroundColor: Colours.transparent,
        color: Colours.navButton,
        '&:hover': {
          color: Colours.white,
        },
      }}
      onClick={() => {
        if (cv)
          window.open(
            'https://drive.google.com/file/d/1KfT1Oi02fLEnsuZ8D0_VYJMzruvmpdyi/view',
            '_blank',
            'noopener,noreferrer',
          );
        if (sectionRef) {
          if (sectionRef.current) sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      {btnName}
    </Button>
  );
};

export default NavButton;
