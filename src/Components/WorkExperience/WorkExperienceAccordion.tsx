import { FC, useState } from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { Fade } from 'react-awesome-reveal';
import { WorkExperience } from 'Components/Shared/Types';
import AccordionTextComponent from 'Components/WorkExperience/AccordionTextComponent';

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
      }}
    >
      <Box
        sx={{
          height: '200px',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: isOpen ? '10px 10px 00px 0px' : '10px 10px 10px 10px',
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Box
          component="img"
          src={workExperience.image}
          sx={{
            width: '100%',
            position: 'relative',
            bottom: `${workExperience.imageBottomOffset}px`,
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
              backgroundColor: 'white',
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
                <Typography align="left" sx={{ color: 'black', padding: '0.5rem' }}>
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
