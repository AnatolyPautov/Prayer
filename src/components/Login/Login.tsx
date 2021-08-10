import React from 'react';
import {
  FlatList,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import Context from '../../../context';
import {StackNavigationProp} from '@react-navigation/stack';
import * as Types from '../../types/types';
import {Routes} from '../../navigation/routes';
import {useAppDispatch} from '../../store/store';
import {setUser} from '../../store/userSlice';

interface LoginProps {
  navigation: StackNavigationProp<Types.RootStackParamList, Routes.LoginScreen>;
}

const Login: React.FC<LoginProps> = ({navigation}) => {
  const {setUserName, userName} = React.useContext(Context);

  const dispatch = useAppDispatch();
  return (
    <Container>
      <LoginBlock>
        <LoginInput onChangeText={setUserName} placeholder="Введите имя" />
        <LoginButton
          onPress={() =>
            userName.trim() &&
            dispatch(setUser(userName)) &&
            navigation.navigate(Routes.BoardScreen)
          }>
          <Text>Войти</Text>
        </LoginButton>
      </LoginBlock>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background: #bfb393;
  justify-content: center;
`;
const LoginBlock = styled.View`
  background: #fff;
  height: 400px;
  border-radius: 70px;
  justify-content: center;
`;
const LoginInput = styled.TextInput`
  text-align: center;
  margin: 0 15px 40px;
  border-style: solid;
  border-color: #e5e5e5;
  border-width: 1px;
`;
const LoginButton = styled.TouchableOpacity`
  margin: 0 15px;
  background: #e5e5e5;
  padding: 20px;
  align-items: center;
  border-radius: 10px;
`;

export default Login;
