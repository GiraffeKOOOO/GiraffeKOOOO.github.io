// import { RefObject } from 'react';
import { Stack } from '@mui/material';
import NavButton from './NavButton';

// type NavButtonsProps = {
//   galleryRef: RefObject<HTMLDivElement>;
//   aboutRef: RefObject<HTMLDivElement>;
//   socialsRef: RefObject<HTMLDivElement>;
//   contactRef: RefObject<HTMLDivElement>;
// };

const NavButtons = () => {
  return (
    <Stack flexDirection="row" sx={{ justifyContent: 'center' }}>
      <NavButton>Home</NavButton>
      <NavButton>Projects</NavButton>
      <NavButton>Experience</NavButton>
      <NavButton>Academia</NavButton>
      <NavButton>CV</NavButton>
      <NavButton>Contact</NavButton>
      <NavButton>About</NavButton>
    </Stack>
  );
};

export default NavButtons;
