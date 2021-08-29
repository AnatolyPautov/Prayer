import React from 'react';
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {getCommentsById, useAppDispatch} from '../../store/store';
import styled from 'styled-components/native';
import PrayerIcon from '../../icons/PrayerIcon';
import UserIcon from '../../icons/UserIcon';
import {useSelector} from 'react-redux';
import * as Types from '../../types/types';
import {Routes} from '../../navigation/routes';
import RectangleIcon from '../../icons/RectangleIcon';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  removePrayerActionCreator,
  updatePrayerActionCreator,
} from '../../store/sagasActions';
import {MainStackParamList} from '../../navigation/MainStack/MainStack';

interface PrayerProps {
  prayer: Types.Prayer;
}
const Prayer: React.FC<PrayerProps> = ({prayer}) => {
  const dispatch = useAppDispatch();

  const navigation =
    useNavigation<
      StackNavigationProp<MainStackParamList, Routes.PrayersHeaderScreen>
    >();

  const comments = useSelector(getCommentsById(prayer.id));

  const rightSwipe = () => {
    return (
      <TouchableOpacity
        onPress={() => dispatch(removePrayerActionCreator(prayer.id))}>
        <DeleteBox>
          <Text style={{color: 'white'}}>Delete</Text>
        </DeleteBox>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderRightActions={rightSwipe}>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate(Routes.DetailsScreen, {prayer})}>
        <PrayerContainer>
          <PrayerBox>
            <RectangleIcon />
            <CheckBox
              style={{marginLeft: 15}}
              tintColors={{true: '#514D47', false: '514D47'}}
              disabled={false}
              value={prayer.checked}
              onValueChange={checked =>
                dispatch(
                  updatePrayerActionCreator(
                    prayer.title,
                    'update',
                    checked,
                    prayer.id,
                  ),
                )
              }
            />
            <PrayerText
              numberOfLines={1}
              style={prayer.checked && {textDecorationLine: 'line-through'}}>
              {prayer.title.length > 15
                ? prayer.title.substring(0, 15) + '...'
                : prayer.title}
            </PrayerText>
          </PrayerBox>
          <PrayerBox>
            <View>
              {comments.length !== 0 && (
                <IconContainer>
                  <UserIcon />
                  <NumberPrayers>{comments.length}</NumberPrayers>
                </IconContainer>
              )}
            </View>
            <TouchableOpacity>
              <IconContainer>
                <PrayerIcon color={'#72A8BC'} />
                <NumberPrayers>15</NumberPrayers>
              </IconContainer>
            </TouchableOpacity>
          </PrayerBox>
        </PrayerContainer>
      </TouchableWithoutFeedback>
    </Swipeable>
  );
};

const PrayerContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-style: solid;
  border-bottom-width: 1px;
  border-color: #e5e5e5;
  padding: 20px 0;
  background-color: white;
  margin: 0 15px;
`;
const PrayerBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const PrayerText = styled.Text`
  font-size: 17px;
  line-height: 20px;
`;
const DeleteBox = styled.View`
  background-color: #ac5253;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 100%;
`;
const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
const NumberPrayers = styled.Text`
  width: 21px;
  color: #514d47;
  font-size: 12px;
  line-height: 14px;
  margin-left: 5px;
`;

export default Prayer;
