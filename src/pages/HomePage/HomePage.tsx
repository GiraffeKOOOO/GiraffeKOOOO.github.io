import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { Colours } from '../../components/Theme/Colours';
import Header from '../../components/Header/Header';
import Profile from './Profile';

const HomePage = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container width={`100vw - 3px`} style={{ backgroundColor: `${Colours.secondary}` }}>
      <Grid item xs={12} style={{ width: '100vw' }}>
        <Header mobile={mobile} />
      </Grid>

      <Grid item xs={12}>
        <Profile mobile={mobile} />
      </Grid>

      {/* <Grid item xs={12}>
        <Footer
          mobile={mobile} 
          galleryRef={galleryRef}
          aboutRef={aboutRef}
          socialsRef={socialsRef}
          contactRef={contactRef}
        />
      </Grid> */}
    </Grid>
  );
};

export default HomePage;
