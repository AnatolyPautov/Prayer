import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainStack from './navigate';

const App = () => {
  return <MainStack />;
};

const styles = StyleSheet.create({});

export default App;
