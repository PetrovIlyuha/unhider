import React, { useContext } from 'react';
import Context from '../state_manager/context';
import NoContent from './Pin/NoContent';
import CreatePin from './Pin/CreatePin';
import PinContent from './Pin/PinContent';
import { withStyles } from '@material-ui/core/styles';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import { Paper } from '@material-ui/core';

const Blog = ({ classes }) => {
  const mobileSize = useMediaQuery('(max-width: 650px)');
  const { state } = useContext(Context);
  const { draft, currentPin } = state;
  let BlogContent;
  if (!draft && !currentPin) {
    // no-content
    BlogContent = NoContent;
  } else if (draft && !currentPin) {
    // create pin
    BlogContent = CreatePin;
  } else if (!draft && currentPin) {
    BlogContent = PinContent;
  }
  return (
    <Paper className={mobileSize ? classes.rootMobile : classes.root}>
      <BlogContent />
    </Paper>
  );
};

const styles = {
  root: {
    minWidth: 350,
    maxWidth: 400,
    maxHeight: 'calc(100vh - 64px)',
    overflowY: 'scroll',
    display: 'flex',
    justifyContent: 'center'
  },
  rootMobile: {
    maxWidth: '100%',
    maxHeight: 400
    // overflowX: 'hidden'
    // overflowY: 'scroll'
  }
};

export default withStyles(styles)(Blog);
