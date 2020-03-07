import React from 'react';
import withRoot from '../withRoot';
import LogoIcon from '../components/LogoIcon';
const App = () => {
  return (
    <div>
      App
      <div style={{ width: '100px' }}>
        <LogoIcon />
      </div>
    </div>
  );
};

export default withRoot(App);
