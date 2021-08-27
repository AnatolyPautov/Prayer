import React from 'react';
import styled from 'styled-components/native';
import {FieldRenderProps} from 'react-final-form';
import {View, Text} from 'react-native';

export interface AuthInput extends FieldRenderProps<string> {
  placeholder: string;
}

const InputField: React.FC<AuthInput> = props => {
  return (
    <InputContainer>
      <Input
        {...props}
        onChange={props.input.onChange}
        value={props.input.value}
        hasError={props.meta.error !== undefined && props.meta.touched}
        secureTextEntry={props.input.name === 'password' && true}
      />
      {props.input.value !== '' && (
        <Error>
          <Text style={{color: 'red'}}>{props.meta.error}</Text>
        </Error>
      )}
    </InputContainer>
  );
};

const InputContainer = styled.View`
  position: relative;
`;
type InputProps = {
  hasError: boolean | undefined;
};
const Input = styled.TextInput<InputProps>`
  text-align: center;
  margin: 0 15px 40px;
  border-style: solid;
  border-color: ${({hasError}) => (hasError ? '#F05658' : '#e5e5e5')};
  border-width: 1px;
  border-radius: 10px;
`;
const Error = styled.View`
  position: absolute;
  bottom: 10px;
  left: 16px;
  width: 100%;
  height: 30px;
  color: red;
`;

export default InputField;
