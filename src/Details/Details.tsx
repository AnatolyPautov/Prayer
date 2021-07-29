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
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import MessageIcon from '../../icons/MessageIcon';
import {addComment} from '../../store/prayerSlice';
import {getComments, useAppDispatch} from '../../store/store';
import Comment from '../Comment/Comment';

interface DetailsProps {
  route: any;
}
const Details: React.FC<DetailsProps> = ({route}) => {
  const [value, setValue] = React.useState<string>('');

  const {prayer} = route.params;

  const allComments = useSelector(getComments);
  const comments = allComments.filter(
    comment => comment.prayerId === prayer.id,
  );
  const dispatch = useAppDispatch();

  const pressHandler = () => {
    if (value.trim()) {
      dispatch(addComment({text: value, prayerId: prayer.id}));
      setValue('');
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Heading>
        <Text style={{fontSize: 17, color: '#fff'}}>{prayer.text}</Text>
      </Heading>
      <DataPrayed>
        <PrayedBlock>
          <Text>July 25 2017</Text>
        </PrayedBlock>
        <PrayedBlock>
          <Text>123</Text>
        </PrayedBlock>
        <PrayedBlock>
          <Text>July 25 2017</Text>
        </PrayedBlock>
        <PrayedBlock>
          <Text>123</Text>
        </PrayedBlock>
      </DataPrayed>
      <Title>comments</Title>
      <FlatList
        keyExtractor={(item: any) => item.id}
        data={comments}
        renderItem={({item}) => <Comment comment={item} />}
      />
      <MessageInput>
        <IconContainer>
          <MessageIcon />
        </IconContainer>
        <TextInput
          value={value}
          placeholder="Add a comment..."
          onChangeText={setValue}
          onSubmitEditing={pressHandler}
        />
      </MessageInput>
    </View>
  );
};

const Heading = styled.View`
  padding: 23px 15px;
  background: #bfb393;
  justify-content: center;
  align-items: center;
`;
const DataPrayed = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;
const PrayedBlock = styled.View`
  width: 50%;
  padding-left: 15px;
  border-style: solid;
  border-color: #e5e5e5;
  border-width: 1px;
`;
const Title = styled.Text`
  font-size: 13px;
  color: #72a8bc;
  text-transform: uppercase;
  padding: 28px 0 15px 15px;
`;
const IconContainer = styled.View`
  margin: 0 12px 0 15px;
  align-items: center;
  justify-content: center;
`;
const MessageInput = styled.View`
  flex-direction: row;
  border-style: solid;
  border-top-color: #e5e5e5;
  border-top-width: 1px;
`;

export default Details;
