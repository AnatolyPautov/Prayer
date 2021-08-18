import {Routes} from '../navigation/routes';

export type Board = {
  id: number;
  title: string;
  description: string;
  user: number;
};
export type Prayer = {
  id: number;
  title: string;
  description: string;
  checked: boolean;
  columnId: number;
  commentsIds: number[];
};
export type Comment = {
  id: number;
  body: string;
  prayerId: number;
  author: string;
  created: string;
};
export type User = {
  email: string;
  name: string;
  password: string;
  token: string;
};
export type NewBoard = {
  title: string;
};
export type NewPrayer = {
  title: string;
  columnId: number;
  checked: boolean;
  description: string;
};

export type RootStackParamList = {
  [Routes.BoardScreen]: undefined;
  [Routes.PrayersHeader]: {board: Board};
  [Routes.DetailsScreen]: {prayer: Prayer};
  [Routes.Subscribed]: {board: Board};
  [Routes.PrayersScreen]: {board: Board};
};

export type AuthStackParamList = {
  [Routes.LoginScreen]: undefined;
  [Routes.RegistrationScreen]: undefined;
};

export type TabStackParam = {
  [Routes.PrayersScreen]: {board: Board};
  [Routes.Subscribed]: {board: Board};
};
