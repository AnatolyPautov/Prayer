import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Routes} from '../routes';
import {defaultOptions} from '../options';
import RegistrationScreen from './RegistrationScreen';
import LoginScreen from './LoginScreen';

const Stack = createStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.LoginScreen}
        component={LoginScreen}
        options={defaultOptions}
      />
      <Stack.Screen
        name={Routes.RegistrationScreen}
        component={RegistrationScreen}
        options={defaultOptions}
      />
    </Stack.Navigator>
  );
}

export type AuthStackParamList = {
  [Routes.LoginScreen]: undefined;
  [Routes.RegistrationScreen]: undefined;
};
