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
import CheckBox from '@react-native-community/checkbox';
import Plus from '../../icons/Plus';
import Prayer from '../Prayer/Prayer';

const Prayers = ({navigation}) => {
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
  const removeTasks = id => {
    setTasks(tasks.filter(task => task.id != id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize: 17}}>To Do</Text>
      </View>
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
        renderItem={({item}) => (
          <Prayer
            removeTasks={removeTasks}
            navigate={navigation.navigate}
            item={item}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    paddingVertical: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  block: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    margin: 15,
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
