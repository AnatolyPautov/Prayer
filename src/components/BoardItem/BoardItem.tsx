import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {Routes} from '../../navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import * as Types from '../../types/types';
import ModalDelete from '../../modals/ModalDelete';
import {MainStackParamList} from '../../navigation/RootStack/MainStack';

interface BoardItemProps {
  board: Types.Board;
}

const BoardItem: React.FC<BoardItemProps> = ({board}) => {
  const [modalActive, setModalActive] = React.useState<boolean>(false);

  const navigation =
    useNavigation<
      StackNavigationProp<MainStackParamList, Routes.BoardScreen>
    >();

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <TouchableOpacity
        onPress={() => navigation.navigate(Routes.PrayersHeaderScreen, {board})}
        onLongPress={() => setModalActive(!modalActive)}>
        <BoardText>{board.title}</BoardText>
      </TouchableOpacity>
      <ModalDelete
        boardId={board.id}
        modalActive={modalActive}
        setModalActive={setModalActive}
      />
    </View>
  );
};

const BoardText = styled.Text`
  margin: 10px 15px 0;
  border-style: solid;
  border-color: #e5e5e5;
  border-width: 1px;
  border-radius: 4px;
  padding: 20px 0 20px 15px;
`;

export default BoardItem;
