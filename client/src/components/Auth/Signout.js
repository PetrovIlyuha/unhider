import React, { useContext } from 'react';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import Context from '../../state_manager/context';

import { GoogleLogout } from 'react-google-login';
import { withStyles } from '@material-ui/core/styles';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Typography from '@material-ui/core/Typography';

const Signout = ({ classes }) => {
  const { dispatch } = useContext(Context);
  const mobileSize = useMediaQuery('(max-width: 650px)');

  const onSignout = () => {
    dispatch({ type: 'SIGNOUT_USER' });
    console.log('User sign out');
  };
  return (
    <GoogleLogout
      onLogoutSuccess={onSignout}
      buttonText="Signout"
      render={({ onClick }) => (
        <span className={classes.root} onClick={onClick}>
          <Typography
            variant="body1"
            className={classes.buttonText}
            style={{ display: mobileSize ? 'none' : 'block' }}
          >
            Sign Out
          </Typography>
          <ExitToApp className={classes.buttonIcon} />
        </span>
      )}
    />
  );
};

const styles = {
  root: {
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonText: {
    color: '#394359',
    fontSize: '1.5rem',
    fontWeight: 'bold'
  },
  buttonIcon: {
    marginLeft: '5px',
    color: 'orange'
  }
};

export default withStyles(styles)(Signout);
