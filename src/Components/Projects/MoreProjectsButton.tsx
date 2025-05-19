import { Dispatch, FC, RefObject, SetStateAction } from 'react';
import { Button } from '@mui/material';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';
import { Colours } from 'Components/Shared/Colours';

type MoreProjectsButtonProps = {
  setShowSecondSet: Dispatch<SetStateAction<boolean>>;
  projectSectionRef: RefObject<HTMLDivElement | null>;
};

const MoreProjectsButton: FC<MoreProjectsButtonProps> = ({
  setShowSecondSet,
  projectSectionRef,
}) => {
  return (
    <Button
      variant="text"
      onClick={() => {
        setShowSecondSet(true);
        window.scrollTo({
          top: projectSectionRef.current!.offsetTop + 200,
          behavior: 'smooth',
        });
      }}
      sx={{
        color: Colours.white,
        border: `1px solid ${Colours.white}`,
        textTransform: 'none',
        fontSize: '1.1rem',
        fontWeight: '300',
        paddingX: '1rem',
        '&:hover': {
          color: Colours.black,
          backgroundColor: Colours.navButton,
          border: `1px solid ${Colours.black}`,
        },
      }}
    >
      Show More
      <HiOutlineChevronDoubleDown style={{ fontSize: '1.1rem', marginLeft: '0.4rem' }} />
    </Button>
  );
};

export default MoreProjectsButton;
