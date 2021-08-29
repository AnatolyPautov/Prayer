import React from 'react';
import {Text, View} from 'react-native';
import {FormApi} from 'final-form';
import {Field, Form, FormProps} from 'react-final-form';
import styled from 'styled-components/native';
import {getUser, useAppDispatch} from '../../../store/store';
import {useSelector} from 'react-redux';
import {StackNavigationProp} from '@react-navigation/stack';
import {Routes} from '../../routes';
import ModalAuth from '../../../modals/ModalAuth';
import ModalIndicator from '../../../modals/ModalIndicator';
import {AuthStackParamList} from '../AuthStack';
import InputField from '../../../components/InputField';
import {validateEmail, validateInput} from '../../../utils/validation/validate';
import {signInRoutine} from '../../../store/userSlice';

interface LoginProps {
  navigation: StackNavigationProp<AuthStackParamList, Routes.LoginScreen>;
}

const LoginScreen: React.FC<LoginProps> = ({navigation}) => {
  const dispatch = useAppDispatch();

  const user = useSelector(getUser);

  const onSubmitForm = (values: FormProps, form: FormApi<FormProps>) => {
    dispatch(signInRoutine({email: values.email, password: values.password}));
    form.reset();
  };

  return (
    <Container>
      <Form
        onSubmit={onSubmitForm}
        render={({handleSubmit, values}) => {
          return (
            <LoginBlock>
              <Field
                name="email"
                placeholder="Write your email"
                component={InputField}
                validate={validateEmail}
              />
              <Field
                name="password"
                placeholder="Write your password"
                component={InputField}
                validate={validateInput}
              />
              <LoginButton
                onPress={handleSubmit}
                disabled={!values.password || !values.email}>
                <Text
                  style={
                    !values.password || !values.email ? {opacity: 0.3} : null
                  }>
                  Sign in
                </Text>
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
      <ModalAuth auth="login" />
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
type LoginButtonProps = {
  disabled: boolean | null | undefined;
};
const LoginButton = styled.TouchableOpacity<LoginButtonProps>`
  margin: 0 15px;
  background: ${({disabled}) => (disabled ? '#e5e5e5' : '#66b5e3')};
  padding: 20px;
  align-items: center;
  border-radius: 10px;
`;
const Link = styled.TouchableOpacity`
  padding: 20px;
  align-items: center;
`;

export default LoginScreen;
