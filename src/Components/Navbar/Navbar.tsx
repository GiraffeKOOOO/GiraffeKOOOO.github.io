import { FC } from 'react';
import { AppBar, Stack, Toolbar } from '@mui/material';
import { Colours } from 'Components/Shared/Colours';
import NavButton from 'Components/Navbar/NavButton';
import { NavButtonName } from 'Components/Shared/Types';

const Navbar: FC = () => {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar sx={{ backgroundColor: Colours.pageBackgroundColour }}>
        <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ width: '100%' }}>
          <NavButton btnName={NavButtonName.About} />
          <NavButton btnName={NavButtonName.Skills} />
          <NavButton btnName={NavButtonName.Projects} />
          <NavButton btnName={NavButtonName.CV} />
          <NavButton btnName={NavButtonName.Experience} />
          <NavButton btnName={NavButtonName.Education} />
          <NavButton btnName={NavButtonName.Contact} />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
