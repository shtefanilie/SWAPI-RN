import React from 'react';
import { HomeView } from './home';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const RootNavigator: () => React$Node = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeView} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
