import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Prayers from './src/Prayers/Prayers';
import Board from './src/Board/Board';
import Details from './src/Details/Details';
import {Text, Button, StyleSheet} from 'react-native';
import PrayerIcon from './icons/PrayerIcon';
import Login from './src/Login/Login';

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Board"
          component={Board}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Prayers"
          component={Prayers}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTitle: props => <Text>dsdfsdf</Text>,
            headerRight: () => <PrayerIcon style={styles.icon} />,
            headerStyle: {
              backgroundColor: '#BFB393',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 15,
  },
});
