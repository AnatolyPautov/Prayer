import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import BackIcon from '../icons/BackIcon';
import PrayerIcon from '../icons/PrayerIcon';

interface HeaderProps {
  text: string;
}
const HeaderDetails: React.FC<HeaderProps> = ({text}) => {
  const navigation = useNavigation();
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
