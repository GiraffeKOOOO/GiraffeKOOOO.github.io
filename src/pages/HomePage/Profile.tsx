import { Divider, Grid, Typography } from '@mui/material';
import BackgroundWrapper from './BackgroundWrapper';
import { Colours } from '../../components/Theme/Colours';

type ProfileProps = {
  mobile: boolean;
};

const Profile = ({ mobile }: ProfileProps) => {
  if (mobile) {
    return (
      <>
        <p>Mobile</p>
      </>
    );
  }

  return (
    <Grid container alignItems="center">
      <Grid item xs={8}>
        <BackgroundWrapper>
          <Typography style={{ fontSize: '7rem', marginLeft: '5rem', paddingTop: '10rem' }}>
            Paskal
          </Typography>
          <Typography style={{ fontSize: '7rem', marginLeft: '5rem' }}>Stepien</Typography>
          <Divider
            style={{
              height: '0.3rem',
              width: '25rem',
              borderRadius: '1rem',
              backgroundColor: `${Colours.primary}`,
              marginTop: '-0.7rem',
              marginLeft: '5rem',
            }}
          />
        </BackgroundWrapper>
      </Grid>

      <Grid item xs={4}>
        <Grid container>
          <Grid item xs={12}>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
            <p>hello</p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Profile;
