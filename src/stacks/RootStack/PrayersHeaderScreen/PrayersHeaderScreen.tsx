import React from 'react';
import {Text, View} from 'react-native';
import SettingIcon from '../../../icons/SettingIcon';
import styled from 'styled-components/native';
import {RouteProp} from '@react-navigation/native';
import {Routes} from '../../../navigation/routes';
import {TabRoute} from '../../../navigation/TabRoute';
import {RootStackParamList} from '../../../navigation/StackRoute';

interface PrayerProps {
  route: RouteProp<RootStackParamList, Routes.PrayersHeaderScreen>;
}
const PrayersHeaderScreen: React.FC<PrayerProps> = ({route}) => {
  const {board} = route.params;

  return (
    <View>
      <Header>
        <Text style={{fontSize: 17}}>{board.title}</Text>
        <Setting>
          <SettingIcon />
        </Setting>
      </Header>
      <Container>
        <TabRoute board={board} />
      </Container>
    </View>
  );
};

const Container = styled.View`
  height: 100%;
  justify-content: center;
  background: white;
`;
const Header = styled.View`
  background: white;
  padding: 22px 0;
  justify-content: center;
  align-items: center;
`;
const Setting = styled.View`
  position: absolute;
  top: 100%;
  right: 15px;
  width: 24px;
  height: 24px;
`;

export default PrayersHeaderScreen;
