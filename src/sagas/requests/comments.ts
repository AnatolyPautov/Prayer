import Api from '../../api/Service';
import * as Types from '../../types/types';

export const requestGetComments = () => {
  return Api.get('comments');
};

export const requestCreateComment = (data: Types.NewComment) => {
  const {body} = data;
  return Api.post(`prayers/${data.prayerId}/comments`, {
    body,
  });
};

export const requestDeleteComment = (data: number) => {
  return Api.delete(`comments/${data}`);
};
