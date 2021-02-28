/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import RootNavigator from './src/views';
import { store } from './src/store';
import { ThemeProvider } from '@react-navigation/native';
import { lightTheme } from './src/components/theme';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <RootNavigator />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
