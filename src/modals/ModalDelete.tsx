import React from 'react';
import {Button, TouchableOpacity, Modal} from 'react-native';
import styled from 'styled-components/native';
import {removeBoardRequest} from '../store/boardsSlice';
import {useAppDispatch} from '../store/store';

interface ModalDeleteProps {
  boardId: number;
  setModalActive(e: boolean): void;
  modalActive: boolean;
}

const ModalDelete: React.FC<ModalDeleteProps> = ({
  boardId,
  modalActive,
  setModalActive,
}) => {
  const dispatch = useAppDispatch();

  return (
    <Modal transparent={true} visible={modalActive}>
      <ModalWrapper>
        <ModalBlock>
          <Button
            title="Отмена"
            onPress={() => {
              setModalActive(!modalActive);
            }}
          />
          <Button
            color="#ac5253"
            title="Delete"
            onPress={() => {
              dispatch(removeBoardRequest(boardId));
              setModalActive(!modalActive);
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

export default ModalDelete;
