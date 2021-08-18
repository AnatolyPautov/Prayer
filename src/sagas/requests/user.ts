import Api from '../../api/Service';

export const signUp = (data: any) => {
  return Api.post('auth/sign-up', {...data});
};

export const signIn = (data: any) => {
  return Api.post('auth/sign-in', {...data});
};
