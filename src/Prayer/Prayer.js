import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const Prayer = ({item, removeTasks, navigate}) => {
  const [selected, setSelected] = React.useState(false);

  const rightSwipe = () => {
    return (
      <TouchableOpacity onPress={() => removeTasks(item.id)}>
        <View style={styles.deleteBox}>
          <Text style={{color: 'white'}}>Delete</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderRightActions={rightSwipe}>
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => navigate('Details')}>
        <CheckBox
          disabled={false}
          value={selected}
          onValueChange={newValue => setSelected(newValue)}
        />
        <Text style={selected && styles.strikeout}>{item.title}</Text>
      </TouchableOpacity>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingVertical: 15,
    backgroundColor: 'white',
    marginHorizontal: 15,
  },
  strikeout: {
    textDecorationLine: 'line-through',
  },
  deleteBox: {
    backgroundColor: '#AC5253',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
    marginLeft: 15,
  },
});

export default Prayer;
