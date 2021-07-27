import React from 'react';
import {FlatList, StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Plus from '../../icons/Plus';
import Prayer from '../Prayer/Prayer';

const Prayers = () => {
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
    <View style={styles.container}>
      <View style={styles.block}>
        <View style={styles.plus}>
          <Plus onPress={pressHandler} />
        </View>
        <TextInput
          style={styles.input}
          onChangeText={setValue}
          value={value}
          placeholder="Add a prayer..."
          onSubmitEditing={pressHandler}
        />
      </View>
      <FlatList
        keyExtractor={item => item.id}
        data={tasks}
        renderItem={({item}) => <Prayer title={item.title} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  block: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    marginBottom: 15,
    borderRadius: 10,
  },
  input: {
    width: '100%',
    fontSize: 17,
  },
  plus: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 14,
  },
});

export default Prayers;
