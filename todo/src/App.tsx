import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import IndexProvider from './context/index-provider';
import {useColorScheme} from 'react-native';
import {MD3DarkTheme, MD3LightTheme, PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import useAppStateFocus from './hooks/useAppStateFocus';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from './services/client';
import useOnlineManager from './hooks/useOnlineManager';
import AppNavigator from './navigation/AppNavigator';

const App = () => {
  const colorScheme = useColorScheme();
  useAppStateFocus();
  useOnlineManager();

  const paperTheme =
    colorScheme === 'dark' ? {...MD3DarkTheme} : {...MD3LightTheme};

  return (
    <PaperProvider theme={paperTheme}>
      <SafeAreaProvider>
        <SafeAreaView style={{flex: 1}}>
          <QueryClientProvider client={queryClient}>
            <NavigationContainer>
              <IndexProvider>
                <AppNavigator />
              </IndexProvider>
            </NavigationContainer>
          </QueryClientProvider>
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default App;
