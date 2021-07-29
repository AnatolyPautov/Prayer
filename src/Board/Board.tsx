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
      <View style={styles.block}>
        <TextInput
          style={styles.input}
          value={value}
          placeholder="My Desk"
          onChangeText={setValue}
          onSubmitEditing={pressHandler}
        />
        <View style={styles.plus}>
          <Plus onPress={pressHandler} />
        </View>
      </View>
      <FlatList
        keyExtractor={(item: any) => item.id}
        data={boards}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Prayers', {boardId: item.id})}>
            <Text style={styles.text}>{item.text}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
    paddingVertical: 15,
  },
  input: {
    width: '75%',
    textAlign: 'center',
    fontSize: 17,
  },
  plus: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginHorizontal: 15,
    marginVertical: 5,
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    borderWidth: 2,
    borderRadius: 4,
    paddingVertical: 20,
    paddingLeft: 15,
  },
});

export default Board;
