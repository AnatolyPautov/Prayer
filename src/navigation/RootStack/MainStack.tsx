import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Routes} from '../routes';
import BoardsScreen from './BoardScreen';
import PrayersHeaderScreen from './PrayersHeaderScreen';
import DetailsScreen from './DetailsScreen';
import * as Types from '../../types/types';
import {defaultOptions} from '../options';

const Stack = createStackNavigator<MainStackParamList>();

export default function MainStack() {
  return (
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
  );
}

export type MainStackParamList = {
  [Routes.BoardScreen]: undefined;
  [Routes.PrayersHeaderScreen]: {board: Types.Board};
  [Routes.DetailsScreen]: {prayer: Types.Prayer};
};
