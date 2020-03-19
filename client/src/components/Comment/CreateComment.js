import React, { useState } from 'react';
import { withStyles } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import SendIcon from '@material-ui/icons/Send';
import Divider from '@material-ui/core/Divider';

import { CREATE_COMMENT_MUTATION } from '../../graphql/mutations';
import { useClient } from '../../graphql/client';

const CreateComment = ({ classes }) => {
  const client = useClient();
  const [comment, setComment] = useState('');
  return (
    <>
      <form className={classes.form}>
        <IconButton className={classes.clearButton} disabled={!comment.trim()}>
          <ClearIcon />
        </IconButton>
        <InputBase
          multiline={true}
          className={classes.input}
          placeholder="Add your Comment"
          onChange={e => setComment(e.target.value)}
          value={comment}
        />
        <IconButton className={classes.sendButton} disabled={!comment.trim()}>
          <SendIcon />
        </IconButton>
      </form>
      <Divider />
    </>
  );
};

const styles = theme => ({
  form: {
    display: 'flex',
    alignItems: 'center'
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  clearButton: {
    padding: 0,
    color: 'red'
  },
  sendButton: {
    padding: 0,
    color: theme.palette.secondary.dark
  }
});

export default withStyles(styles)(CreateComment);
