import React from 'react';
import {FlatList, Text, View, TextInput, Button} from 'react-native';
import styled from 'styled-components/native';
import * as Types from '../../types/types';

interface LoginProps {}

const Login: React.FC<LoginProps> = ({}) => {
  return (
    <Container>
      <TextInput placeholder="Введите имя" />
      <Button onPress={() => console.log('sdfsd')} title="sdfsdf"></Button>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  margin-top: 100px;
`;

export default Login;
