import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {FlatList, Text, View, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import MessageIcon from '../../../icons/MessageIcon';
import Plus from '../../../icons/Plus';
import {getCommentsById, useAppDispatch} from '../../../store/store';
import Comment from '../../../components/Comment';
import {Routes} from '../../../navigation/routes';
import RectangleIcon from '../../../icons/RectangleIcon';
import HeaderDetails from '../../../layouts/HeaderDetails';
import {getCurrentDate} from '../../../utils/getCurrentDate';
import {addCommentActionCreator} from '../../../store/sagasActions';
import {RootStackParamList} from '../../../navigation/StackRoute';

interface DetailsProps {
  route: RouteProp<RootStackParamList, Routes.DetailsScreen>;
}
const DetailsScreen: React.FC<DetailsProps> = ({route}) => {
  const [value, setValue] = React.useState<string>('');

  let date = getCurrentDate();
  const {prayer} = route.params;

  const comments = useSelector(getCommentsById(prayer.id));
  const dispatch = useAppDispatch();

  const pressHandler = () => {
    if (value.trim()) {
      dispatch(addCommentActionCreator(value, prayer.id));
      setValue('');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <HeaderDetails text={prayer.title} />
      <ScrollView>
        <LastPrayed>
          <RectangleIcon />
          <Text style={{marginLeft: 10}}>Last prayed 8 min ago</Text>
        </LastPrayed>
        <DataPrayed>
          <PrayedBlock
            style={{borderRightColor: '#e5e5e5', borderRightWidth: 1}}>
            <DataPrayedTitle style={{fontSize: 22, lineHeight: 26}}>
              {date}
            </DataPrayedTitle>
            <Text>Date Added</Text>
            <Text style={{color: '#72A8BC'}}>Opened for 4 days</Text>
          </PrayedBlock>
          <PrayedBlock>
            <DataPrayedTitle>123</DataPrayedTitle>
            <Text>Times Prayed Total</Text>
          </PrayedBlock>
          <PrayedBlock
            style={{borderRightColor: '#e5e5e5', borderRightWidth: 1}}>
            <DataPrayedTitle>60</DataPrayedTitle>
            <Text>Times Prayed by Me</Text>
          </PrayedBlock>
          <PrayedBlock>
            <DataPrayedTitle>63</DataPrayedTitle>
            <Text>Times Prayed by Others</Text>
          </PrayedBlock>
        </DataPrayed>
        <Title>members</Title>
        <View style={{flexDirection: 'row', marginHorizontal: 15}}>
          <View>
            <FlatList
              keyExtractor={item => item.id}
              data={[
                {name: 'Биба', id: '2342'},
                {name: 'Боба', id: '212312'},
              ]}
              horizontal={true}
              renderItem={({item}) => (
                <Member>
                  <Text>{item.name[0]}</Text>
                </Member>
              )}
            />
          </View>
          <IconPlusContainer
          /* onPress={() => dispatch()} */
          >
            <Plus width={16} color={'#fff'} />
          </IconPlusContainer>
        </View>
        <Title>comments</Title>
        <FlatList
          keyExtractor={(item, index) => 'key' + index}
          data={comments}
          renderItem={({item}) => <Comment comment={item} />}
        />
      </ScrollView>

      <MessageContainer>
        <IconMessageContainer>
          <MessageIcon />
        </IconMessageContainer>
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

const LastPrayed = styled.View`
  padding: 15px 15px;
  flex-direction: row;
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
`;
const DataPrayedTitle = styled.Text`
  font-size: 32px;
  line-height: 37px;
  color: #bfb393;
`;
const Title = styled.Text`
  font-size: 13px;
  color: #72a8bc;
  text-transform: uppercase;
  padding: 28px 0 15px 15px;
`;
const IconPlusContainer = styled.TouchableOpacity`
  background: #bfb393;
  height: 32px;
  width: 32px;
  align-items: center;
  justify-content: center;
  border-radius: 50;
`;
const IconMessageContainer = styled.View`
  margin: 0 12px 0 15px;
  align-items: center;
  justify-content: center;
`;
const Member = styled.View`
  align-items: center;
  justify-content: center;
  background: green;
  border-radius: 50;
  width: 32px;
  height: 32px;
  margin-right: 7px;
`;
const MessageContainer = styled.View`
  flex-direction: row;
  border-style: solid;
  border-top-color: #e5e5e5;
  border-top-width: 1px;
`;
const MessageInput = styled.TextInput`
  width: 100%;
  height: 56px;
`;

export default DetailsScreen;
