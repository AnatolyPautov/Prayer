import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {Routes} from './routes';
import Board from '../components/Board';
import PrayersHeader from '../components/PrayersHeader';
import Details from '../components/Details';
import * as Types from '../types/types';
import {defaultOptions} from './options';

const Stack = createStackNavigator<Types.RootStackParamList>();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Routes.BoardScreen}
          component={Board}
          options={defaultOptions}
        />
        <Stack.Screen
          name={Routes.PrayersHeader}
          component={PrayersHeader}
          options={defaultOptions}
        />
        <Stack.Screen
          name={Routes.DetailsScreen}
          component={Details}
          options={defaultOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
