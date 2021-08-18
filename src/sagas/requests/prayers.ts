import Api from '../../api/Service';
import * as Types from '../../types/types';

export const requestGetPrayers = () => {
  return Api.get('prayers');
};

export const requestCreatePrayer = (data: Types.NewPrayer) => {
  const {title, description, checked} = data;
  return Api.post(`columns/${data.columnId}/prayers`, {
    title,
    description,
    checked,
  });
};
export const requestDeletePrayer = (data: number) => {
  return Api.delete(`prayers/${data}`);
};

export const requestUpdatePrayer = (data: any) => {
  const {title, description, checked} = data;
  return Api.put(`prayers/${data.id}`, {title, description, checked});
};
