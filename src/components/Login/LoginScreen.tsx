import React from 'react';
import {Text, ActivityIndicator, View} from 'react-native';
import {FormApi} from 'final-form';
import {Field, Form, FormProps} from 'react-final-form';
import styled from 'styled-components/native';
import * as Types from '../../types/types';
import {getUser, useAppDispatch} from '../../store/store';
import {signInRequest} from '../../store/userSlice';
import {useSelector} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';
import {Routes} from '../../navigation/routes';

interface LoginProps {
  navigation: StackNavigationProp<Types.AuthStackParamList, Routes.LoginScreen>;
}

const LoginScreen: React.FC<LoginProps> = ({navigation}) => {
  const dispatch = useAppDispatch();

  const user = useSelector(getUser);

  const onSubmitForm = (values: FormProps, form: FormApi<FormProps>) => {
    dispatch(signInRequest({email: values.email, password: values.password}));
    form.reset();
    /*     console.log(user.user.token);
    if (!user.user.token) {
      Alert.alert('нееет');
    } */
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
                name="email"
                render={({input, meta}) => {
                  return (
                    <View>
                      <LoginInput
                        placeholder="Write your email"
                        value={input.value}
                        onChangeText={input.onChange}
                      />
                    </View>
                  );
                }}
              />
              <Field
                name="password"
                render={({input}) => {
                  return (
                    <LoginInput
                      placeholder="Write your password"
                      secureTextEntry
                      value={input.value}
                      onChangeText={input.onChange}
                    />
                  );
                }}
              />
              <LoginButton
                onPress={handleSubmit}
                disabled={!values.password || !values.email}>
                <Text>Sign in</Text>
              </LoginButton>
              <Link
                onPress={() => navigation.navigate(Routes.RegistrationScreen)}>
                <Text style={{color: '#a369ec'}}>
                  Еще не зарегистрированны?
                </Text>
              </Link>
            </LoginBlock>
          );
        }}
      />
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

export default LoginScreen;
