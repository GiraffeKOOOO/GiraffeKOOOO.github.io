import { Grid } from '@mui/material';
import NavButtons from './NavButtons';

type HeaderProps = {
  mobile: boolean;
};

const Header = ({ mobile }: HeaderProps) => {
  if (mobile) {
    return (
      <Grid container direction="column" alignContent="center" style={{ paddingTop: '120px' }}>
        <Grid item>
          <NavButtons />
        </Grid>
      </Grid>
    );
  }

  return (
    <>
      <Grid container direction="column" justifyContent="center" alignItems="flex-end">
        <Grid item xs={12}>
          <NavButtons />
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
