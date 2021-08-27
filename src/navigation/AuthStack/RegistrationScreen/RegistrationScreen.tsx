import React from 'react';
import {ActivityIndicator, Modal, Text, View} from 'react-native';
import {FormApi} from 'final-form';
import {Field, Form, FormProps} from 'react-final-form';
import styled from 'styled-components/native';
import {getUser, useAppDispatch} from '../../../store/store';
import {signUpRequest} from '../../../store/userSlice';
import {useSelector} from 'react-redux';
import {Routes} from '../../../navigation/routes';
import {StackNavigationProp} from '@react-navigation/stack';
import ModalIndicator from '../../../modals/ModalIndicator';
import ModalAuth from '../../../modals/ModalAuth';
import {AuthStackParamList} from '../AuthStack';
import InputField from '../../../components/InputField';
import {validateEmail, validateInput} from '../../../utils/validation/validate';

interface RegistrationProps {
  navigation: StackNavigationProp<
    AuthStackParamList,
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
                placeholder="Write your name"
                component={InputField}
                validate={validateInput}
              />
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
                disabled={!values.name || !values.email || !values.password}>
                <Text
                  style={
                    !values.password || !values.email || !values.password
                      ? {opacity: 0.3}
                      : null
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
      <ModalAuth auth="signUp" />
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

export default RegistrationScreen;
