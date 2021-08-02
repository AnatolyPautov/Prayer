import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MainStack from './navigate';
import Context from './context';

const App = () => {
  const [userName, setUserName] = React.useState<string>('');

  return (
    <Context.Provider value={{userName, setUserName}}>
      <MainStack />
    </Context.Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
