import React from 'react';
import {FlatList, View, Alert} from 'react-native';
import {useSelector} from 'react-redux';
import Plus from '../../../icons/Plus';
import styled from 'styled-components/native';
import {getBoards, useAppDispatch} from '../../../store/store';
import BoardItem from '../../../components/BoardItem';
import {
  addBoardActionCreator,
  getBoardsActionCreator,
  getCommentsActionCreator,
  getPrayersActionCreator,
} from '../../../store/sagasActions';

interface BoardProps {}

const BoardScreen: React.FC<BoardProps> = ({}) => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getBoardsActionCreator());
    dispatch(getPrayersActionCreator());
    dispatch(getCommentsActionCreator());
  }, [dispatch]);

  const [value, setValue] = React.useState<string>('');

  const boards = useSelector(getBoards);

  const pressHandler = () => {
    if (value.trim()) {
      dispatch(addBoardActionCreator(value, 'test desc'));
      setValue('');
    } else {
      Alert.alert('название дела не может быть пустым');
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <BoardInput>
        <Input
          value={value}
          placeholder="My Desk"
          onChangeText={setValue}
          onSubmitEditing={pressHandler}
        />
        <PlusIcon onPress={pressHandler}>
          <Plus width={16} />
        </PlusIcon>
      </BoardInput>
      <FlatList
        keyExtractor={(item, index) => 'key' + index}
        data={boards}
        renderItem={({item}) => <BoardItem board={item} />}
      />
    </View>
  );
};

const BoardInput = styled.View`
  flex-direction: row;
  border-style: solid;
  border-bottom-width: 1px;
  border-color: #e5e5e5;
  padding: 15px 0;
  justify-content: center;
`;
const Input = styled.TextInput`
  width: 85%;
  text-align: center;
  font-size: 17px;
`;
const PlusIcon = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export default BoardScreen;
