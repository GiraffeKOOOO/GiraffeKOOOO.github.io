import { FC, RefObject } from 'react';
import { IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Colours } from 'Components/Shared/Colours';

type ScrollButtonProps = {
  skillSectionRef: RefObject<HTMLDivElement | null>;
};

const ScrollButton: FC<ScrollButtonProps> = ({ skillSectionRef }) => {
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
        if (skillSectionRef.current) {
          skillSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }}
    >
      <ExpandMoreIcon fontSize="large" />
    </IconButton>
  );
};

export default ScrollButton;
