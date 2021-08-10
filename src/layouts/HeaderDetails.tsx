import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import BackIcon from '../icons/BackIcon';
import PrayerIcon from '../icons/PrayerIcon';
import {Routes} from '../navigation/routes';
import * as Types from '../types/types';

interface HeaderProps {
  text: string;
  navigation: StackNavigationProp<
    Types.RootStackParamList,
    Routes.DetailsScreen
  >;
}
const HeaderDetails: React.FC<HeaderProps> = ({text, navigation}) => {
  return (
    <Header>
      <ButtonsContainer>
        <Button onPress={() => navigation.goBack()}>
          <BackIcon />
        </Button>
        <Button>
          <PrayerIcon />
        </Button>
      </ButtonsContainer>
      <View style={{paddingHorizontal: 15}}>
        <Text style={{fontSize: 17, color: '#fff'}}>{text}</Text>
      </View>
    </Header>
  );
};

const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const Button = styled.TouchableOpacity`
  padding: 20px 15px;
`;
const Header = styled.View`
  width: 100%;
  padding-bottom: 20px;
  background: #bfb393;
`;

export default HeaderDetails;
