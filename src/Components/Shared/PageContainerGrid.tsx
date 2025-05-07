import { FC, ReactNode } from 'react';
import { Grid } from '@mui/material';
import { Colours } from 'Components/Shared/Colours';

type PageContainerGridProps = {
  children: ReactNode;
};

const PageContainerGrid: FC<PageContainerGridProps> = ({ children }) => {
  return (
    <Grid
      container
      sx={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: Colours.pageBackgroundColour,
      }}
      flexDirection="column"
    >
      {children}
    </Grid>
  );
};

export default PageContainerGrid;
