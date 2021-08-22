import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Context from './context';
import StackRoute from './src/navigation/StackRoute';

const App = () => {
  const [userName, setUserName] = React.useState<string>('');

  return (
    <Context.Provider value={{userName, setUserName}}>
      <StackRoute />
    </Context.Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
