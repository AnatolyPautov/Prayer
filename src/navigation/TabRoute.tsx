import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Routes} from './routes';
import PrayersScreen from '../components/Prayers/PrayersScreen';
import Subscribed from '../components/Subscribed';
import * as Types from '../types/types';

const Tab = createMaterialTopTabNavigator<Types.TabStackParam>();

interface TabRouteProps {
  board: Types.Board;
}

export const TabRoute: React.FC<TabRouteProps> = ({board}) => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.PrayersScreen}
      screenOptions={{swipeEnabled: false}}>
      <Tab.Screen
        name={Routes.PrayersScreen}
        component={PrayersScreen}
        initialParams={{board}}
      />
      <Tab.Screen
        name={Routes.Subscribed}
        component={Subscribed}
        initialParams={{board}}
      />
    </Tab.Navigator>
  );
};
