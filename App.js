/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import SignIn from './src/screens/SignIn';
import Send from './src/screens/Send';

const App = () => {
  const [navigation, navigateTo] = React.useState('SignIn');
  const [address, setAddress] = React.useState('');
  switch (navigation) {
    case 'SignIn':
      return <SignIn navigateTo={navigateTo} address={address} setAddress={setAddress} />;
    case 'Send':
      return <Send navigateTo={navigateTo} address={address} setAddress={setAddress} />;
    default:
      return <SignIn navigateTo={navigateTo} address={address} setAddress={setAddress} />;
  }
};

export default App;
