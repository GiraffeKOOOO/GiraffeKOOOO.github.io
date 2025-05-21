import { FC, RefObject } from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import { Colours } from 'Components/Shared/Colours';
import NavButton from 'Components/Navbar/NavButton';
import { NavButtonName, SocialsButtonName, Tech } from 'Components/Shared/Types';
import SocialsButton from 'Components/About/SocialsButton';
import LanguageIcon from 'Components/Projects/LanguageIcon';

type FooterProps = {
  skillSectionRef: RefObject<HTMLDivElement | null>;
  projectSectionRef: RefObject<HTMLDivElement | null>;
};

const techStack: Tech[] = [Tech.react, Tech.typescript, Tech.vite, Tech.mui, Tech.reactRouter];

const Footer: FC<FooterProps> = ({ skillSectionRef, projectSectionRef }) => {
  return (
    <Grid
      container
      sx={{
        height: '11rem',
        width: '100vw',
        maxWidth: '100vw',
        backgroundColor: Colours.footerBackground,
        paddingY: '3rem',
        paddingX: '2rem',
        marginTop: '4rem',
      }}
    >
      <Grid size={2} sx={{ marginTop: '-0.5rem' }}>
        <Stack direction="column">
          <Typography>This website is powered by</Typography>
          <Stack direction="row" justifyContent="center" spacing={2} sx={{ marginTop: '0.4rem' }}>
            {techStack.map((tech) => {
              return (
                <Typography sx={{ color: Colours.white, fontSize: '1.8rem' }}>
                  <LanguageIcon tech={tech} />
                </Typography>
              );
            })}
          </Stack>
          <Typography>Made by Paskal Stepien</Typography>
        </Stack>
      </Grid>
      <Grid size={8}>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ marginTop: '1rem' }}>
          <NavButton btnName={NavButtonName.About} />
          <NavButton btnName={NavButtonName.Skills} sectionRef={skillSectionRef} />
          <NavButton btnName={NavButtonName.Projects} sectionRef={projectSectionRef} />
          <NavButton btnName={NavButtonName.CV} cv />
          <NavButton btnName={NavButtonName.Experience} />
          <NavButton btnName={NavButtonName.Education} />
          <NavButton btnName={NavButtonName.Contact} />
        </Stack>
      </Grid>
      <Grid size={2}>
        <Stack direction="column" alignItems="flex-start">
          <Typography>Find me on</Typography>
          <Stack direction="row" justifyContent="center" spacing={1} sx={{ marginTop: '0.2rem' }}>
            <SocialsButton btnName={SocialsButtonName.gitHub} />
            <SocialsButton btnName={SocialsButtonName.linkedIn} />
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Footer;
