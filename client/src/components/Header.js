import React, { useContext } from 'react';
import Context from '../state_manager/context';
import Signout from './Auth/Signout';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import StreetviewIcon from '@material-ui/icons/Streetview';
import Typography from '@material-ui/core/Typography';

const Header = ({ classes }) => {
  const {
    state: { currentUser }
  } = useContext(Context);

  return (
    <div
      className={classes.root}
      style={{ fontFamily: "'Fjalla One', sans-serif" }}
    >
      <AppBar position="static">
        <Toolbar>
          <div className={classes.grow}>
            <StreetviewIcon className={classes.icon} />
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.brandName}
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
              <Typography variant="h5" color="inherit" noWrap>
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
