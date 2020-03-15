import React, { useContext } from 'react';
import { GraphQLClient } from 'graphql-request';
import { GoogleLogin } from 'react-google-login';
import { withStyles } from '@material-ui/core/styles';
// import Typography from "@material-ui/core/Typography";

import Context from '../../context';

const ME_QUERY = `
query {
  me {
    _id
    name
    email
    picture
  }
}
`;

const Login = ({ classes }) => {
  const { dispatch } = useContext(Context);
  const onSuccess = async googleUser => {
    const idToken = googleUser.getAuthResponse().id_token;
    const client = new GraphQLClient('http://localhost:4000/graphql', {
      headers: { authorization: idToken }
    });
    const { me } = await client.request(ME_QUERY);
    dispatch({ type: 'LOGIN_USER', payload: me });
  };

  return (
    <GoogleLogin
      clientId="847801444008-o8hjt1e15dsg3ro603ckhj66f8p8rvd2.apps.googleusercontent.com"
      onSuccess={onSuccess}
      isSignedIn={true}
    />
  );
};

const styles = {
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  }
};

export default withStyles(styles)(Login);
