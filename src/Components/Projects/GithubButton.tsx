import { FC } from 'react';
import { Button } from '@mui/material';
import { FaGithub } from 'react-icons/fa';
import { Colours } from 'Components/Shared/Colours';

const GithubButton: FC = () => {
  return (
    <Button
      variant="text"
      onClick={() => {
        return window.open('https://github.com/GiraffeKOOOO', '_blank', 'noopener,noreferrer');
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
      View more on GitHub
      <FaGithub style={{ fontSize: '1.1rem', marginLeft: '0.4rem' }} />
    </Button>
  );
};

export default GithubButton;
