import React from 'react';
import {Alert, ScrollView, View} from 'react-native';
import Plus from '../../../icons/Plus';
import Prayer from '../../../components/PrayerItem';
import {useSelector} from 'react-redux';
import {
  getPrayersChecked,
  getPrayersUnchecked,
  useAppDispatch,
} from '../../../store/store';
import styled from 'styled-components/native';
import {RouteProp} from '@react-navigation/native';
import {Routes} from '../../../navigation/routes';
import {addPrayerActionCreator} from '../../../store/sagasActions';
import {TabStackParam} from '../TabStack';

interface PrayerProps {
  route: RouteProp<TabStackParam, Routes.PrayersScreen>;
}
const PrayersScreen: React.FC<PrayerProps> = ({route}) => {
  const [value, setValue] = React.useState<string>('');
  const [answers, setAnswers] = React.useState<boolean>(false);

  const {board} = route.params;

  const checkedPrayers = useSelector(getPrayersChecked(board.id));
  const unCheckedPrayers = useSelector(getPrayersUnchecked(board.id));
  const dispatch = useAppDispatch();

  const pressHandler = () => {
    if (value.trim()) {
      dispatch(addPrayerActionCreator(value, board.id, 'test desc', false));
      setValue('');
    } else {
      Alert.alert('название дела не может быть пустым');
    }
  };

  return (
    <Container>
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
        <View style={{paddingTop: 20, marginBottom: 200}}>
          {unCheckedPrayers.map(item => {
            return <Prayer key={item.id} prayer={item} />;
          })}
          {checkedPrayers.length > 0 && (
            <ShowButtonContainer answers={answers}>
              <ShowButton onPress={() => setAnswers(!answers)}>
                <ButtonText>
                  {answers ? 'hide' : 'show'} Answered Prayers
                </ButtonText>
              </ShowButton>
            </ShowButtonContainer>
          )}
          {answers &&
            checkedPrayers.map(item => {
              return <Prayer key={item.id} prayer={item} />;
            })}
        </View>
      </ScrollView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background: white;
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
type ShowButtonProps = {
  answers: boolean;
};
const ShowButtonContainer = styled.View<ShowButtonProps>`
  margin: 0 15px;
  border-style: solid;
  border-bottom-width: ${({answers}) => (answers ? '1px' : '0')};
  border-color: #e5e5e5;
`;
const ShowButton = styled.TouchableOpacity`
  margin: 21px auto;
  width: 70%;
  background: #bfb393;
  border-radius: 15px;
  padding: 8px 23px;
  border-style: solid;
  border-bottom-width: 1px;
  border-color: #e5e5e5;
`;

const ButtonText = styled.Text`
  font-size: 12px;
  line-height: 14px;
  color: white;
  text-transform: uppercase;
  text-align: center;
`;
const PlusContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin: 14px;
`;

export default PrayersScreen;
