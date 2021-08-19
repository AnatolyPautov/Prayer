import Api from '../../api/Service';
import * as Types from '../../types/types';

export const requestGetBoards = () => {
  return Api.get('columns');
};

export const requestCreateBoard = (data: Types.NewBoard) => {
  return Api.post('columns', {...data});
};

export const requestDeleteBoard = (data: number) => {
  return Api.delete(`columns/${data}`);
};
