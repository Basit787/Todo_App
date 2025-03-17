import React from 'react';
import {AppRegistry} from 'react-native';
import {name} from './app.json';
import App from './src/App';

export default function Main() {
  return (
    <React.Fragment>
      <App />
    </React.Fragment>
  );
}

AppRegistry.registerComponent(name, () => Main);
