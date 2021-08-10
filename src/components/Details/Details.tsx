import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Button,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import {useSelector} from 'react-redux';
import styled from 'styled-components/native';
import Context from '../../../context';
import MessageIcon from '../../icons/MessageIcon';
import Plus from '../../icons/Plus';
import {getComments, getCommentsById, useAppDispatch} from '../../store/store';
import Comment from '../Comment/Comment';
import * as Types from '../../types/types';
import {Routes} from '../../navigation/routes';
import {addComment} from '../../store/commentsSlice';
import RectangleIcon from '../../icons/RectangleIcon';
import HeaderDetails from '../../layouts/HeaderDetails';
import {StackNavigationProp} from '@react-navigation/stack';

interface DetailsProps {
  route: RouteProp<Types.RootStackParamList, Routes.DetailsScreen>;
  navigation: StackNavigationProp<
    Types.RootStackParamList,
    Routes.DetailsScreen
  >;
}
const Details: React.FC<DetailsProps> = ({route, navigation}) => {
  const [value, setValue] = React.useState<string>('');

  let date = new Date();

  const {prayer} = route.params;

  const {userName} = React.useContext(Context);

  const comments = useSelector(getCommentsById(prayer.id));
  const dispatch = useAppDispatch();

  const pressHandler = () => {
    if (value.trim()) {
      dispatch(
        addComment({text: value, prayerId: prayer.id, author: userName}),
      );
      setValue('');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <HeaderDetails navigation={navigation} text={prayer.text} />
      <ScrollView>
        <LastPrayed>
          <RectangleIcon />
          <Text style={{marginLeft: 10}}>Last prayed 8 min ago</Text>
        </LastPrayed>
        <DataPrayed>
          <PrayedBlock
            style={{borderRightColor: '#e5e5e5', borderRightWidth: 1}}>
            <DataPrayedTitle style={{fontSize: 22, lineHeight: 26}}>
              July 25 {date.getFullYear()}
            </DataPrayedTitle>
            <Text>Date Added</Text>
            <Text>Opened for 4 days</Text>
          </PrayedBlock>
          <PrayedBlock>
            <DataPrayedTitle>{prayer.totalCountPrayed}</DataPrayedTitle>
            <Text>Times Prayed Total</Text>
          </PrayedBlock>
          <PrayedBlock
            style={{borderRightColor: '#e5e5e5', borderRightWidth: 1}}>
            <DataPrayedTitle>{prayer.myCountPrayed}</DataPrayedTitle>
            <Text>Times Prayed by Me</Text>
          </PrayedBlock>
          <PrayedBlock>
            <DataPrayedTitle>{prayer.othersCountPrayed}</DataPrayedTitle>
            <Text>Times Prayed by Others</Text>
          </PrayedBlock>
        </DataPrayed>
        <Title>members</Title>
        <View style={{flexDirection: 'row', marginHorizontal: 15}}>
          <View>
            <FlatList
              keyExtractor={(item: any) => item.id}
              data={[{name: 'Биба'}, {name: 'Боба'}]}
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
        {comments.map(item => {
          return <Comment comment={item} key={item.id} />;
        })}
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
      </ScrollView>
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
type PrayedBlockProps = {};
const PrayedBlock = styled.View<PrayedBlockProps>`
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

export default Details;
