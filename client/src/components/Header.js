import React, { useContext } from 'react';
import Context from '../state_manager/context';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import Signout from './Auth/Signout';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import StreetviewIcon from '@material-ui/icons/Streetview';
import Typography from '@material-ui/core/Typography';

const Header = ({ classes }) => {
  const mobileSize = useMediaQuery('(max-width: 650px)');
  const {
    state: { currentUser }
  } = useContext(Context);

  return (
    <div
      className={classes.root}
      style={{ fontFamily: "'Fjalla One', sans-serif" }}
    >
      <AppBar
        position="static"
        style={{
          background:
            'linear-gradient(45deg, rgb(67, 147, 163) 0%, rgb(67, 147, 163) 59%,rgb(93, 161, 169) 59%, rgb(93, 161, 169) 65%,rgb(119, 175, 175) 65%, rgb(119, 175, 175) 70%,rgb(145, 190, 181) 70%, rgb(145, 190, 181) 73%,rgb(171, 204, 187) 73%, rgb(171, 204, 187) 78%,rgb(197, 218, 193) 78%, rgb(197, 218, 193) 100%)'
        }}
      >
        <Toolbar>
          <div className={classes.grow}>
            <StreetviewIcon className={classes.icon} />
            <Typography
              className={mobileSize ? classes.mobile : classes.brandName}
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
            >
              Unhider
            </Typography>
          </div>
          {/* Current User Info */}
          {currentUser && (
            <div className={classes.grow}>
              <img
                className={classes.picture}
                src={currentUser.picture}
                alt={currentUser.name}
              />
              <Typography
                variant="h5"
                color="inherit"
                className={mobileSize ? classes.mobile : ''}
                noWrap
              >
                {currentUser.name}
              </Typography>
            </div>
          )}
          <Signout />
        </Toolbar>
      </AppBar>
    </div>
  );
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    fontFamily: 'Fjalla One'
  },
  grow: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    marginRight: theme.spacing.unit,
    color: '#F2BE8D',
    fontSize: 45
  },
  brandName: {
    fontFamily: "'Fjalla One', sans-serif",
    fontSize: '2.2rem'
  },
  mobile: {
    display: 'none'
  },
  picture: {
    height: '50px',
    borderRadius: '90%',
    marginRight: theme.spacing.unit * 2
  }
});

export default withStyles(styles)(Header);
