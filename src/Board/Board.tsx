import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Button,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import Plus from '../../icons/Plus';
import {addBoard} from '../../store/prayerSlice';
import {getBoards, useAppDispatch} from '../../store/store';
import styled from 'styled-components/native';

interface BoardProps {
  navigation: any;
}

const Board: React.FC<BoardProps> = ({navigation}) => {
  const [value, setValue] = React.useState<string>('');

  const boards = useSelector(getBoards);
  const dispatch = useAppDispatch();

  const pressHandler = () => {
    if (value.trim()) {
      dispatch(addBoard({text: value}));
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
        keyExtractor={(item: any) => item.id}
        data={boards}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Prayers', {board: item})}>
            <BoardText>{item.text}</BoardText>
          </TouchableOpacity>
        )}
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
const BoardText = styled.Text`
  margin: 10px 15px 0;
  border-style: solid;
  border-color: #e5e5e5;
  border-width: 1px;
  border-radius: 4px;
  padding: 20px 0 20px 15px;
`;

export default Board;
