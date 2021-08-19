import React from 'react';
import {ActivityIndicator, Modal, View} from 'react-native';
import styled from 'styled-components/native';

const ModalIndicator = () => {
  return (
    <Modal transparent={true}>
      <ModalWrapper>
        <View style={{marginBottom: 150}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </ModalWrapper>
    </Modal>
  );
};

const ModalWrapper = styled.View`
  justify-content: center;
  background: #00000083;
  flex: 1;
`;

export default ModalIndicator;
