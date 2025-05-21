import { FC } from 'react';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { SocialsButtonName } from 'Components/Shared/Types';
import { Colours } from 'Components/Shared/Colours';

type SocialsButtonProps = {
  btnName: SocialsButtonName;
};

// TODO: finish this off, grab the switch from shiny
const iconSwitch = (btnName: string) => {
  switch (btnName) {
    case SocialsButtonName.gitHub:
      return <GitHubIcon />;
    case SocialsButtonName.linkedIn:
      return <LinkedInIcon />;
    default:
      return <></>;
  }
};

const SocialsButton: FC<SocialsButtonProps> = ({ btnName }) => {
  return (
    <IconButton
      aria-label="scroll to next section"
      sx={{
        height: '2.2rem',
        width: '2.2rem',
        backgroundColor: Colours.transparent,
        color: Colours.navButton,
        '&:hover': {
          backgroundColor: Colours.scrollButton,
          color: Colours.scrollButtonChevronHover,
          border: 'none',
        },
      }}
      onClick={() => {
        window.open(
          `${
            btnName === SocialsButtonName.gitHub
              ? 'https://github.com/GiraffeKOOOO'
              : 'https://www.linkedin.com/in/paskal-stepien-432161174/'
          }`,
          '_blank',
          'noopener,noreferrer',
        );
      }}
    >
      {iconSwitch(btnName)}
    </IconButton>
  );
};

export default SocialsButton;
