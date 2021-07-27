import React from 'react';
import {FlatList, StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Prayer = ({title}) => {
  const [selected, setSelected] = React.useState(false);

  return (
    <View style={styles.checkboxContainer}>
      <CheckBox
        disabled={false}
        value={selected}
        onValueChange={newValue => setSelected(newValue)}
      />
      <Text style={selected && styles.strikeout}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingVertical: 15,
  },
  strikeout: {
    textDecorationLine: 'line-through',
  },
});

export default Prayer;
