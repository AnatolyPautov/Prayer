import {Routes} from '../navigation/routes';

export type Board = {
  id: string;
  title: string;
  description: string;
  userId: string;
};
export type Prayer = {
  id: string;
  title: string;
  columnId: string;
  checked: boolean;
  totalCountPrayed: number;
  myCountPrayed: number;
  othersCountPrayed: number;
  author: string;
};
export type Comment = {
  id: string;
  body: string;
  prayerId: string;
  author: string;
  created: string;
};
export type UserName = {
  firstName: string;
};
export type NewBoard = {
  title: string;
};
export type NewPrayer = {
  title: string;
  columnId: string;
  checked: boolean;
  totalCountPrayed: number;
  myCountPrayed: number;
  othersCountPrayed: number;
  author: string;
};
export type NewComment = {
  body: string;
  prayerId: string;
  created: string;
  author: string;
};

export type RootStackParamList = {
  [Routes.LoginScreen]: undefined;
  [Routes.BoardScreen]: undefined;
  [Routes.PrayersScreen]: {board: Board};
  [Routes.DetailsScreen]: {prayer: Prayer};
};
