import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {answeredPrayer, removePrayer} from '../../store/prayerSlice';
import {useAppDispatch} from '../../store/store';
import * as Types from '../../types/types';
import styled from 'styled-components/native';

interface PrayerProps {
  prayer: Types.Prayer;
  navigate: any;
}
const Prayer: React.FC<PrayerProps> = ({prayer, navigate}) => {
  const dispatch = useAppDispatch();

  const rightSwipe = () => {
    return (
      <TouchableOpacity onPress={() => dispatch(removePrayer(prayer.id))}>
        <DeleteBox>
          <Text style={{color: 'white'}}>Delete</Text>
        </DeleteBox>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderRightActions={rightSwipe}>
      <TouchableWithoutFeedback onPress={() => navigate('Details', {prayer})}>
        <PrayerContainer>
          <CheckBox
            disabled={false}
            value={prayer.answered}
            onValueChange={newValue =>
              dispatch(answeredPrayer({id: prayer.id, newValue}))
            }
          />
          <Text style={prayer.answered && {textDecorationLine: 'line-through'}}>
            {prayer.text}
          </Text>
        </PrayerContainer>
      </TouchableWithoutFeedback>
    </Swipeable>
  );
};

const PrayerContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-style: solid;
  border-bottom-width: 1px;
  border-color: #e5e5e5;
  padding: 15px 0;
  background-color: white;
  margin: 0 15px;
`;
const DeleteBox = styled.View`
  background-color: #ac5253;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 100%;
`;

export default Prayer;
