import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Plus from '../../icons/Plus';
import Prayer from '../Prayer/Prayer';
import {useSelector} from 'react-redux';
import {
  getPrayers,
  getPrayersById,
  getPrayersChecked,
  getPrayersUnchecked,
  useAppDispatch,
} from '../../store/store';
import SettingIcon from '../../icons/SettingIcon';
import styled from 'styled-components/native';
import Context from '../../../context';
import {StackNavigationProp} from '@react-navigation/stack';
import * as Types from '../../types/types';
import {RouteProp} from '@react-navigation/native';
import {Routes} from '../../navigation/routes';
import {addPrayer} from '../../store/prayersSlice';

interface PrayerProps {
  navigation: StackNavigationProp<
    Types.RootStackParamList,
    Routes.PrayersScreen
  >;
  route: RouteProp<Types.RootStackParamList, Routes.PrayersScreen>;
}
const Prayers: React.FC<PrayerProps> = ({navigation, route}) => {
  const [value, setValue] = React.useState<string>('');
  const [answers, setAnswers] = React.useState<boolean>(false);

  const {board} = route.params;

  const {userName} = React.useContext(Context);

  const checkedPrayers = useSelector(getPrayersChecked(board.id));
  const unCheckedPrayers = useSelector(getPrayersUnchecked(board.id));
  const dispatch = useAppDispatch();

  const pressHandler = () => {
    if (value.trim()) {
      dispatch(
        addPrayer({
          text: value,
          boardId: board.id,
          checked: false,
          totalCountPrayed: 0,
          myCountPrayed: 0,
          othersCountPrayed: 0,
          author: userName,
        }),
      );
      setValue('');
    } else {
      Alert.alert('название дела не может быть пустым');
    }
  };

  return (
    <Container>
      <Header>
        <Text style={{fontSize: 17}}>{board.text}</Text>
        <Setting>
          <SettingIcon />
        </Setting>
      </Header>
      <InputBlock>
        <PlusContainer>
          <Plus onPress={pressHandler} />
        </PlusContainer>
        <AddPrayer
          onChangeText={setValue}
          value={value}
          placeholder="Add a prayer..."
          onSubmitEditing={pressHandler}
        />
      </InputBlock>
      <ScrollView>
        {unCheckedPrayers.map(item => {
          return <Prayer key={item.id} navigation={navigation} prayer={item} />;
        })}
        {checkedPrayers.length > 0 && (
          <ShowButton onPress={() => setAnswers(!answers)}>
            <ButtonText>
              {answers ? 'hide' : 'show'} Answered Prayers
            </ButtonText>
          </ShowButton>
        )}
        {answers &&
          checkedPrayers.map(item => {
            return (
              <Prayer key={item.id} navigation={navigation} prayer={item} />
            );
          })}
      </ScrollView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background: white;
`;
const Header = styled.View`
  padding: 22px 0;
  justify-content: center;
  align-items: center;
`;
const InputBlock = styled.View`
  flex-direction: row;
  border-style: solid;
  border-color: #e5e5e5;
  border-width: 1px;
  margin: 15px 15px 0;
  border-radius: 10px;
`;
const AddPrayer = styled.TextInput`
  width: 75%;
  font-size: 17px;
  overflow: hidden;
`;

const ShowButton = styled.TouchableOpacity`
  margin: 21px auto;
  width: 70%;
  background: #bfb393;
  border-radius: 15px;
  padding: 8px 23px;
`;

const ButtonText = styled.Text`
  font-size: 12px;
  line-height: 14px;
  color: white;
  text-transform: uppercase;
  text-align: center;
`;
const Setting = styled.View`
  position: absolute;
  top: 100%;
  right: 15px;
  width: 24px;
  height: 24px;
`;
const PlusContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin: 14px;
`;

export default Prayers;
