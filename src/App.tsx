import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Animation from '@screens/Animation';
import Calculator from '@screens/Calculator';
import Games from '@screens/Games';
import Home from '@screens/Home';
import React from 'react';

export type RootStackParamList = {
  Calculator: undefined;
  Animation: undefined;
  Games: undefined;
  Home: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export default () => {
  const render = () => {
    return (
      <RootStack.Navigator initialRouteName={'Home'}>
        <RootStack.Screen name={'Home'} component={Home} />
        <RootStack.Screen name={'Animation'} component={Animation} />
        <RootStack.Screen name={'Games'} component={Games} />
        <RootStack.Screen name="Calculator" component={Calculator} />
      </RootStack.Navigator>
    );
  };
  return <NavigationContainer>{render()}</NavigationContainer>;
};
