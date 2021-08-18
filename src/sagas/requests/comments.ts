import Api from '../../api/Service';

export const requestGetComments = () => {
  return Api.get('comments');
};

export const requestCreateComment = (data: any) => {
  const {body} = data;
  return Api.post(`prayers/${data.prayerId}/comments`, {
    body,
  });
};

export const requestDeleteComment = (data: number) => {
  return Api.delete(`comments/${data}`);
};
