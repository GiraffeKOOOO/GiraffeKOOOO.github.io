import { FC, useState } from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { Fade } from 'react-awesome-reveal';
import { WorkExperience } from 'Components/Shared/Types';
import AccordionTextComponent from 'Components/WorkExperience/AccordionTextComponent';
import { Colours } from 'Components/Shared/Colours';

type WorkExperienceAccordionProps = {
  workExperience: WorkExperience;
};

const WorkExperienceAccordion: FC<WorkExperienceAccordionProps> = ({ workExperience }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Stack
      sx={{
        width: '75vw',
        marginY: '2rem',
        border: `1px solid ${Colours.white}`,
        borderRadius: isOpen ? '10px 10px 0px 0px' : '10px 10px 10px 10px',
      }}
    >
      <Box
        sx={{
          height: '200px',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: isOpen ? '10px 10px 0px 0px' : '10px 10px 10px 10px',
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Box
          component="img"
          src={workExperience.image}
          sx={{
            width: '100%',
            position: 'relative',
            bottom: {
              sm: `${workExperience.imageBottomOffset.sm}px`,
              md: `${workExperience.imageBottomOffset.md}px`,
              lg: `${workExperience.imageBottomOffset.lg}px`,
              xl: `${workExperience.imageBottomOffset.xl}px`,
            },
            opacity: 0.5,
            '&:hover': {
              opacity: 0.8,
            },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '90px',
            color: 'white',
            fontSize: '1.5rem',
            left: '1rem',
          }}
        >
          {workExperience.company}
          {isOpen ? ' ⮟' : ' ⮝'}
        </Box>
      </Box>
      {isOpen && (
        <Fade delay={0} duration={1000} fraction={0.5} triggerOnce>
          <Box
            sx={{
              width: '75vw',
              backgroundColor: `${Colours.footerBackground}`,
              borderBottomLeftRadius: '10px',
              borderBottomRightRadius: '10px',
            }}
          >
            <Grid container>
              <Grid size={3}>
                <AccordionTextComponent component="company" text={workExperience.company} />
                <AccordionTextComponent component="role" text={workExperience.role} />
              </Grid>
              <Grid size={9}>
                <Typography align="left" sx={{ color: 'white', padding: '0.5rem' }}>
                  {workExperience.description}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      )}
    </Stack>
  );
};

export default WorkExperienceAccordion;
