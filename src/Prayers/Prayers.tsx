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
import {getPrayers, useAppDispatch} from '../../store/store';
import {addPrayer} from '../../store/prayerSlice';
import SettingIcon from '../../icons/SettingIcon';
import styled from 'styled-components/native';

interface PrayerProps {
  navigation: any;
  route: any;
}
const Prayers: React.FC<PrayerProps> = ({navigation, route}) => {
  const [value, setValue] = React.useState<string>('');
  const [answers, setAnswers] = React.useState<boolean>(false);

  const {board} = route.params;

  const allPrayers = useSelector(getPrayers);
  const prayers = allPrayers.filter(prayer => prayer.boardId === board.id);
  const answeredPrayers = prayers.filter(prayer => prayer.answered === true);
  const unAnsweredPrayers = prayers.filter(prayer => prayer.answered === false);
  const dispatch = useAppDispatch();

  const pressHandler = () => {
    if (value.trim()) {
      dispatch(addPrayer({text: value, boardId: board.id, answered: false}));
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
        <View>
          <FlatList
            keyExtractor={item => item.id}
            data={unAnsweredPrayers}
            renderItem={({item}) => (
              <Prayer navigate={navigation.navigate} prayer={item} />
            )}
          />
        </View>
        {answeredPrayers.length > 0 && (
          <ShowButton onPress={() => setAnswers(!answers)}>
            <ButtonText>
              {answers ? 'hide' : 'show'} Answered Prayers
            </ButtonText>
          </ShowButton>
        )}
        {answers && (
          <View>
            <FlatList
              keyExtractor={item => item.id}
              data={answeredPrayers}
              renderItem={({item}) => (
                <Prayer navigate={navigation.navigate} prayer={item} />
              )}
            />
          </View>
        )}
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
  width: 100%;
  font-size: 17px;
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
