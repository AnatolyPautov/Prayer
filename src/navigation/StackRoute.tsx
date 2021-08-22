import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {Routes} from './routes';
import BoardsScreen from '../stacks/RootStack/BoardScreen';
import PrayersHeaderScreen from '../stacks/RootStack/PrayersHeaderScreen';
import DetailsScreen from '../stacks/RootStack/DetailsScreen';
import * as Types from '../types/types';
import {defaultOptions} from './options';
import RegistrationScreen from '../stacks/AuthStack/RegistrationScreen';
import LoginScreen from '../stacks/AuthStack/LoginScreen';
import {useSelector} from 'react-redux';
import {getUser} from '../store/store';

export type RootStackParamList = {
  [Routes.BoardScreen]: undefined;
  [Routes.PrayersHeaderScreen]: {board: Types.Board};
  [Routes.DetailsScreen]: {prayer: Types.Prayer};
};

export type AuthStackParamList = {
  [Routes.LoginScreen]: undefined;
  [Routes.RegistrationScreen]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const AuthStack = createStackNavigator<AuthStackParamList>();

export default function StackRoute() {
  const user = useSelector(getUser);

  return (
    <NavigationContainer>
      {!user.isAuth ? (
        <AuthStack.Navigator>
          <AuthStack.Screen
            name={Routes.LoginScreen}
            component={LoginScreen}
            options={defaultOptions}
          />
          <AuthStack.Screen
            name={Routes.RegistrationScreen}
            component={RegistrationScreen}
            options={defaultOptions}
          />
        </AuthStack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name={Routes.BoardScreen}
            component={BoardsScreen}
            options={defaultOptions}
          />
          <Stack.Screen
            name={Routes.PrayersHeaderScreen}
            component={PrayersHeaderScreen}
            options={defaultOptions}
          />
          <Stack.Screen
            name={Routes.DetailsScreen}
            component={DetailsScreen}
            options={defaultOptions}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
