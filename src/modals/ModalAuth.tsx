import React from 'react';
import {Button, Text, Modal} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import {getUser, useAppDispatch} from '../store/store';
import {cleanErrors} from '../store/userSlice';

const ModalAuth = ({}) => {
  const dispatch = useAppDispatch();
  const user = useSelector(getUser);
  console.log(user.errors);

  return (
    <Modal
      transparent={true}
      visible={user.errors !== undefined && user.errors !== ''}>
      <ModalWrapper>
        <ModalBlock>
          <Text style={{color: 'red', marginBottom: 30}}>
            Такой пользватель уже существует
          </Text>
          <Button
            title="Ok"
            onPress={() => {
              dispatch(cleanErrors());
            }}
          />
        </ModalBlock>
      </ModalWrapper>
    </Modal>
  );
};

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
  flex-direction: row;
  justify-content: space-between;
`;

export default ModalAuth;
