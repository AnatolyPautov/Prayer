import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Routes} from '../routes';
import PrayersScreen from './PrayersScreen';
import SubscribedScreen from './SubscribedScreen';
import * as Types from '../../types/types';

export type TabStackParam = {
  [Routes.PrayersScreen]: {board: Types.Board};
  [Routes.SubscribedScreen]: {board: Types.Board};
};

const Tab = createMaterialTopTabNavigator<TabStackParam>();

interface TabRouteProps {
  board: Types.Board;
}

export const TabStack: React.FC<TabRouteProps> = ({board}) => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.PrayersScreen}
      screenOptions={{
        swipeEnabled: false,
        tabBarLabelStyle: {color: '#72A8BC'},
        tabBarIndicatorStyle: {backgroundColor: '#72A8BC'},
      }}>
      <Tab.Screen
        name={Routes.PrayersScreen}
        component={PrayersScreen}
        initialParams={{board}}
      />
      <Tab.Screen
        name={Routes.SubscribedScreen}
        component={SubscribedScreen}
        initialParams={{board}}
      />
    </Tab.Navigator>
  );
};
