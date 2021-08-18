import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MainStack from './src/navigation/StackRoute';
import AuthRoute from './src/navigation/AuthRoute';
import Context from './context';
import {getUser, useAppDispatch} from './src/store/store';
import {getBoards} from './src/store/boardsSlice';
import {getPrayers} from './src/store/prayersSlice';
import {getComments} from './src/store/commentsSlice';
import {useSelector} from 'react-redux';

const App = () => {
  const [userName, setUserName] = React.useState<string>('');
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getBoards({}));
    dispatch(getPrayers({}));
    dispatch(getComments({}));
  }, [dispatch]);

  const user = useSelector(getUser);
  return (
    <Context.Provider value={{userName, setUserName}}>
      {!user.isAuth ? <AuthRoute /> : <MainStack />}
    </Context.Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
