import React from 'react';
import { HomeView } from './home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackNavigator: () => React$Node = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeView} />
    </Stack.Navigator>
  );
};

const RootNavigator: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
         <Tab.Screen name="Home" component={HomeStackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
