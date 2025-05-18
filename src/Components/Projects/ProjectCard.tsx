import { FC } from 'react';
import { Project } from 'Components/Shared/Types';
import { Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import LanguageIcon from 'Components/Projects/LanguageIcon';
import { Colours } from 'Components/Shared/Colours';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card
      sx={{
        width: 500,
        border: '1px solid white',
        opacity: '0.8',
        '&:hover': {
          opacity: '1',
        },
      }}
    >
      <CardActionArea
        sx={{ height: '100%' }}
        onClick={() => {
          return window.open(`${project.projectUrl}`, '_blank', 'noopener,noreferrer');
        }}
      >
        <CardMedia component="img" height="200" image={project.projectImageUrl} />
        <CardContent sx={{ height: '140px', marginBottom: '-0.8rem', borderTop: '1px solid grey' }}>
          <Typography gutterBottom variant="h5" component="div">
            {project.projectName}
          </Typography>
          <Typography variant="body2" sx={{ color: Colours.projectDescription }}>
            {project.projectDescription}
          </Typography>
          <Stack direction="row" justifyContent="center" spacing={2} sx={{ marginTop: '0.4rem' }}>
            {project.stack.map((tech) => {
              return (
                <Typography sx={{ color: Colours.techIcon, fontSize: '1.8rem' }}>
                  <LanguageIcon tech={tech} />
                </Typography>
              );
            })}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
