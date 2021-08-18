import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {Routes} from './routes';
import Login from '../components/Login';
import * as Types from '../types/types';
import {defaultOptions} from './options';
import Registration from '../components/Registration';

const Stack = createStackNavigator<Types.AuthStackParamList>();

export default function AuthRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Routes.LoginScreen}
          component={Login}
          options={defaultOptions}
        />
        <Stack.Screen
          name={Routes.RegistrationScreen}
          component={Registration}
          options={defaultOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
