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

const Details = ({}) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{fontSize: 17, color: '#fff'}}>
          Prayer item two which is for my family to love God whole heartedly.
        </Text>
      </View>
      <View style={styles.dataPrayed}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.prayedBlock}>
            <Text>July 25 2017</Text>
          </View>
          <View style={styles.prayedBlock}>
            <Text>123</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.prayedBlock}>
            <Text>July 25 2017</Text>
          </View>
          <View style={styles.prayedBlock}>
            <Text>123</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    paddingVertical: 23,
    backgroundColor: '#BFB393',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  dataPrayed: {
    marginTop: 10,
    borderTopColor: '#E5E5E5',
    borderTopWidth: 1,
  },
  prayedBlock: {
    width: '50%',
    marginTop: 32,
    paddingLeft: 15,
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  'prayedBlock:first-child': {
    borderRightColor: '#E5E5E5',
    borderRightWidth: 1,
    borderStyle: 'solid',
  },
});

export default Details;
