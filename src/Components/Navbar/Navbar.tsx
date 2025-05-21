import { FC, RefObject } from 'react';
import { AppBar, Stack, Toolbar } from '@mui/material';
import { Colours } from 'Components/Shared/Colours';
import NavButton from 'Components/Navbar/NavButton';
import { NavButtonName } from 'Components/Shared/Types';

type NavbarProps = {
  skillSectionRef: RefObject<HTMLDivElement | null>;
  projectSectionRef: RefObject<HTMLDivElement | null>;
  workExperienceSectionRef: RefObject<HTMLDivElement | null>;
};

const Navbar: FC<NavbarProps> = ({
  skillSectionRef,
  projectSectionRef,
  workExperienceSectionRef,
}) => {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar sx={{ backgroundColor: Colours.pageBackgroundColour }}>
        <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ width: '100%' }}>
          <NavButton btnName={NavButtonName.About} />
          <NavButton btnName={NavButtonName.Skills} sectionRef={skillSectionRef} />
          <NavButton btnName={NavButtonName.Projects} sectionRef={projectSectionRef} />
          <NavButton btnName={NavButtonName.CV} cv />
          <NavButton btnName={NavButtonName.Experience} sectionRef={workExperienceSectionRef} />
          <NavButton btnName={NavButtonName.Education} />
          <NavButton btnName={NavButtonName.Contact} />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
