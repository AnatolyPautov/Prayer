import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MainStack from './src/navigation/navigate';
import Context from './context';
import {useAppDispatch} from './src/store/store';
import {getBoards} from './src/store/boardsSlice';
import {getPrayers} from './src/store/prayersSlice';
import {getComments} from './src/store/commentsSlice';

const App = () => {
  const [userName, setUserName] = React.useState<string>('');
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getBoards({}));
    dispatch(getPrayers({}));
    dispatch(getComments({}));
  }, [dispatch]);

  return (
    <Context.Provider value={{userName, setUserName}}>
      <MainStack />
    </Context.Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
