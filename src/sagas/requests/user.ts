import Api from '../../api/Service';
import * as Types from '../../types/types';

export const signUp = (data: Types.Registration) => {
  return Api.post('auth/sign-up', {...data});
};

export const signIn = (data: Types.Login) => {
  return Api.post('auth/sign-in', {...data});
};
