import { FC } from 'react';
import { AppBar, Stack, Toolbar, Typography } from '@mui/material';
import { Colours } from 'Components/Shared/Colours';

const Navbar: FC = () => {
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar sx={{ backgroundColor: Colours.pageBackgroundColour }}>
        <Stack direction="row" spacing={6} justifyContent="flex-end" sx={{ width: '100%' }}>
          <Typography>About</Typography>
          <Typography>Skills</Typography>
          <Typography>Projects</Typography>
          <Typography>CV</Typography>
          <Typography>Experience</Typography>
          <Typography>Education</Typography>
          <Typography>Contact</Typography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
