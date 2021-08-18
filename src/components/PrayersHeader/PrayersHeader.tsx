import React from 'react';
import {Text, View} from 'react-native';
import SettingIcon from '../../icons/SettingIcon';
import styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import * as Types from '../../types/types';
import {RouteProp} from '@react-navigation/native';
import {Routes} from '../../navigation/routes';
import {TabRoute} from '../../navigation/TabRoute';

interface PrayerProps {
  navigation: StackNavigationProp<
    Types.RootStackParamList,
    Routes.PrayersHeader
  >;
  route: RouteProp<Types.RootStackParamList, Routes.PrayersHeader>;
}
const PrayersHeader: React.FC<PrayerProps> = ({navigation, route}) => {
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

export default PrayersHeader;
