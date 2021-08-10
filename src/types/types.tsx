import {Routes} from '../navigation/routes';

export type Board = {
  id: string;
  text: string;
};
export type Prayer = {
  id: string;
  text: string;
  boardId: string;
  checked: boolean;
  totalCountPrayed: number;
  myCountPrayed: number;
  othersCountPrayed: number;
  author: string;
};
export type Comment = {
  id: string;
  text: string;
  prayerId: string;
  author: string;
};
export type UserName = {
  firstName: string;
};
export type NewBoard = {
  text: string;
};
export type NewPrayer = {
  text: string;
  boardId: string;
  checked: boolean;
  totalCountPrayed: number;
  myCountPrayed: number;
  othersCountPrayed: number;
  author: string;
};
export type NewComment = {
  text: string;
  prayerId: string;
  author: string;
};

export type RootStackParamList = {
  [Routes.LoginScreen]: undefined;
  [Routes.BoardScreen]: undefined;
  [Routes.PrayersScreen]: {board: Board};
  [Routes.DetailsScreen]: {prayer: Prayer};
};
