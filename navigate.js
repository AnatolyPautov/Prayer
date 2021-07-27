import React from 'react';
import Prayers from './src/Prayers/Prayers';
import Board from './src/Board/Board';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Board"
          component={Board}
          options={{title: 'My Desk'}}
        />
        <Stack.Screen
          name="Prayers"
          component={Prayers}
          options={{title: 'To Do'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
