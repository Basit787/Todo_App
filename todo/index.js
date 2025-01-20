import {AppRegistry, useColorScheme} from 'react-native';
import App from './src/App';
import {name} from './app.json';
import {MD3DarkTheme, MD3LightTheme, PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {SnackbarProvider} from './src/components/Snackbar';
import React from 'react';

export default function Main() {
  const colorScheme = useColorScheme();

  const navigationTheme =
    colorScheme === 'dark' ? {...MD3DarkTheme} : {...MD3LightTheme};

  const paperTheme =
    colorScheme === 'dark' ? {...MD3DarkTheme} : {...MD3LightTheme};

  return (
    <React.Fragment>
      <NavigationContainer theme={navigationTheme}>
        <PaperProvider theme={paperTheme}>
          <SnackbarProvider>
            <App />
          </SnackbarProvider>
        </PaperProvider>
      </NavigationContainer>
    </React.Fragment>
  );
}

AppRegistry.registerComponent(name, () => Main);
