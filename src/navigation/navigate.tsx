import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {Text, Button, StyleSheet, View} from 'react-native';
import PrayerIcon from '../icons/PrayerIcon';
import {Routes} from './routes';
import Login from '../components/Login/Login';
import Board from '../components/Board/Board';
import Prayers from '../components/Prayers/Prayers';
import Details from '../components/Details/Details';
import HeaderDetails from '../layouts/HeaderDetails';
import * as Types from '../types/types';
import {defaultOptions} from './options';
import {useSelector} from 'react-redux';
import {getUser} from '../store/store';

const Stack = createStackNavigator<Types.RootStackParamList>();

export default function Navigate() {
  const user = useSelector(getUser);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user.isAuth && (
          <Stack.Screen
            name={Routes.LoginScreen}
            component={Login}
            options={defaultOptions}
          />
        )}
        <Stack.Screen
          name={Routes.BoardScreen}
          component={Board}
          options={defaultOptions}
        />
        <Stack.Screen
          name={Routes.PrayersScreen}
          component={Prayers}
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

const styles = StyleSheet.create({
  headerBack: {
    display: 'none',
  },
});
