import React from 'react';
import {Text, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {getPrayersChecked, getPrayersUnchecked} from '../../../store/store';
import styled from 'styled-components/native';
import {RouteProp} from '@react-navigation/native';
import {Routes} from '../../../navigation/routes';
import Prayer from '../../../components/PrayerItem';
import {TabStackParam} from '../../../navigation/TabRoute';

interface SubscribedProps {
  route: RouteProp<TabStackParam, Routes.SubscribedScreen>;
}
const SubscribedScreen: React.FC<SubscribedProps> = ({route}) => {
  const [answers, setAnswers] = React.useState<boolean>(false);

  const {board} = route.params;
  const checkedPrayers = useSelector(getPrayersChecked(board.id));
  const unCheckedPrayers = useSelector(getPrayersUnchecked(board.id));

  return (
    <Container>
      <ScrollView>
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
      </ScrollView>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background: white;
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

export default SubscribedScreen;
