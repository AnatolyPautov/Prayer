import React from 'react';
import {ActivityIndicator, Button, Modal, Text, View} from 'react-native';
import {FormApi} from 'final-form';
import {Field, Form, FormProps} from 'react-final-form';
import styled from 'styled-components/native';
import * as Types from '../../types/types';
import {getUser, useAppDispatch} from '../../store/store';
import {cleanErrors, signUpRequest} from '../../store/userSlice';
import {useSelector} from 'react-redux';
import {Routes} from '../../navigation/routes';
import {StackNavigationProp} from '@react-navigation/stack';
import ModalIndicator from '../../modals/ModalIndicator';
import ModalAuth from '../../modals/ModalAuth';

interface RegistrationProps {
  navigation: StackNavigationProp<
    Types.AuthStackParamList,
    Routes.RegistrationScreen
  >;
}

const RegistrationScreen: React.FC<RegistrationProps> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const user = useSelector(getUser);

  const onSubmitForm = (
    {name, email, password}: FormProps,
    form: FormApi<FormProps>,
  ) => {
    dispatch(signUpRequest({email, name, password}));
    form.reset();
  };

  if (user.isAuth === true) {
    return <ActivityIndicator color="#0000ff" />;
  }
  return (
    <Container>
      <Form
        onSubmit={onSubmitForm}
        render={({handleSubmit, values}) => {
          return (
            <LoginBlock>
              <Field
                name="name"
                render={({input}) => {
                  return (
                    <LoginInput
                      placeholder="Write your name"
                      onChangeText={input.onChange}
                      value={input.value}
                    />
                  );
                }}
              />
              <Field
                name="email"
                render={({input}) => {
                  return (
                    <LoginInput
                      placeholder="Write your email"
                      onChangeText={input.onChange}
                      value={input.value}
                    />
                  );
                }}
              />
              <Field
                name="password"
                render={({input}) => {
                  return (
                    <LoginInput
                      placeholder="Write your password"
                      onChangeText={input.onChange}
                      value={input.value}
                    />
                  );
                }}
              />
              <LoginButton
                onPress={handleSubmit}
                disabled={!values.name || !values.email || !values.password}>
                <Text
                  style={
                    !values.password || !values.email ? {opacity: 0.3} : null
                  }>
                  Sign in
                </Text>
              </LoginButton>
              <Link onPress={() => navigation.goBack()}>
                <Text style={{color: '#a369ec'}}>Уже зарегистрированны?</Text>
              </Link>
            </LoginBlock>
          );
        }}
      />
      <ModalAuth />
      {user.isFetching === true && <ModalIndicator />}
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  background: #e5e5e5;
`;
const LoginBlock = styled.View`
  background: #fff;
  padding: 30px 0;
  border-radius: 50px;
  margin: 0 15px;
  justify-content: center;
`;
const LoginInput = styled.TextInput`
  text-align: center;
  margin: 0 15px 40px;
  border-style: solid;
  border-color: #e5e5e5;
  border-width: 1px;
  border-radius: 10px;
`;
const LoginButton = styled.TouchableOpacity`
  margin: 0 15px;
  background: #e5e5e5;
  padding: 20px;
  align-items: center;
  border-radius: 10px;
`;
const Link = styled.TouchableOpacity`
  padding: 20px;
  align-items: center;
`;
const ModalWrapper = styled.View`
  justify-content: center;
  background: #00000083;
  flex: 1;
`;
const ModalBlock = styled.View`
  background: #fff;
  margin: 0 15px;
  border-radius: 30px;
  padding: 30px;
`;

export default RegistrationScreen;
