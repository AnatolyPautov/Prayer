import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import * as Types from '../../types/types';
import styled from 'styled-components/native';
import {useAppDispatch} from '../../store/store';
import {removeComment} from '../../store/commentsSlice';

interface CommentProps {
  comment: Types.Comment;
}
const Comment: React.FC<CommentProps> = ({comment}) => {
  const dispatch = useAppDispatch();

  const rightSwipe = () => {
    return (
      <TouchableOpacity onPress={() => dispatch(removeComment(comment.id))}>
        <DeleteBox>
          <Text style={{color: 'white'}}>Delete</Text>
        </DeleteBox>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderRightActions={rightSwipe}>
      <Container>
        <Avatar></Avatar>
        <View>
          <Text>{comment.author}</Text>
          <Text>{comment.text}</Text>
        </View>
      </Container>
    </Swipeable>
  );
};

const DeleteBox = styled.View`
  background: #ac5253;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 100%;
`;
const Container = styled.View`
  flex-direction: row;
  padding: 14px 0 14px 15px;
  border-style: solid;
  border-top-color: #e5e5e5;
  border-top-width: 1px;
  background: white;
`;
const Avatar = styled.View`
  background: red;
  width: 46px;
  height: 46px;
  border-radius: 50;
  margin-right: 9px;
`;

export default Comment;
