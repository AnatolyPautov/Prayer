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
      <View>
        <Text>Last prayed 8 min ago</Text>
      </View>
      <DataPrayed>
        <PrayedBlock>
          <DataPrayedTitle>July 25 2017</DataPrayedTitle>
          <Text>Date Added</Text>
          <Text>Opened for 4 days</Text>
        </PrayedBlock>
        <PrayedBlock>
          <DataPrayedTitle>123</DataPrayedTitle>
          <Text>Times Prayed Total</Text>
        </PrayedBlock>
        <PrayedBlock>
          <DataPrayedTitle>63</DataPrayedTitle>
          <Text>Times Prayed by Me</Text>
        </PrayedBlock>
        <PrayedBlock>
          <DataPrayedTitle>60</DataPrayedTitle>
          <Text>Times Prayed by Others</Text>
        </PrayedBlock>
      </DataPrayed>
      <Title>members</Title>
      <Title>comments</Title>
      <FlatList
        keyExtractor={(item: any) => item.id}
        data={comments}
        renderItem={({item}) => <Comment comment={item} />}
      />
      <MessageContainer>
        <IconContainer>
          <MessageIcon />
        </IconContainer>
        <MessageInput
          value={value}
          placeholder="Add a comment..."
          onChangeText={setValue}
          onSubmitEditing={pressHandler}
        />
      </MessageContainer>
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
  border-style: solid;
  border-bottom-color: #e5e5e5;
  border-bottom-width: 1px;
`;
const PrayedBlock = styled.View`
  width: 50%;
  height: 108px;
  justify-content: center;
  padding-left: 15px;
  border-style: solid;
  border-top-color: #e5e5e5;
  border-top-width: 1px;
  border-left-color: #e5e5e5;
  border-left-width: 1px;
`;
const DataPrayedTitle = styled.Text`
  font-size: 22px;
  line-height: 26px;
  color: #bfb393;
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
const MessageContainer = styled.View`
  flex-direction: row;
  border-style: solid;
  border-top-color: #e5e5e5;
  border-top-width: 1px;
`;
const MessageInput = styled.TextInput`
  width: 100%;
`;

export default Details;
