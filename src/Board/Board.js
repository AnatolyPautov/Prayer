import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Button,
} from 'react-native';
import Plus from '../../icons/Plus';

const Board = ({navigation}) => {
  const [tasks, setTasks] = React.useState([]);
  const [value, setValue] = React.useState('');

  const pressHandler = () => {
    if (value.trim()) {
      addTodo(value);
      setValue('');
    } else {
      Alert.alert('название дела не может быть пустым');
    }
  };
  const addTodo = title => {
    setTasks(prev => [...prev, {id: Date.now().toString(), title}]);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.block}>
        <TextInput
          style={styles.input}
          onChangeText={setValue}
          value={value}
          placeholder="My Desc"
          onSubmitEditing={pressHandler}
        />
        <View style={styles.plus}>
          <Plus onPress={pressHandler} />
        </View>
      </View>
      <FlatList
        keyExtractor={item => item.id}
        data={tasks}
        renderItem={({item}) => (
          <Text
            onPress={() => navigation.navigate('Prayers')}
            style={styles.text}>
            {item.title}
          </Text>
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
