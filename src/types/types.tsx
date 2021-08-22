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
  userId: number;
  created: string;
};
export type User = {
  email: string;
  name: string;
  password: string;
  token: string;
};
export type Login = {
  email: string;
  name: string;
  password: string;
  token: string;
};
export type Registration = {
  email: string;
  name: string;
  password: string;
};
export type NewBoard = {
  title: string;
  description: string;
};
export type NewPrayer = {
  title: string;
  columnId: number;
  checked: boolean;
  description: string;
};
export type UpdatePrayer = {
  id: string;
  title: string;
  checked: boolean;
  description: string;
};
export type NewComment = {
  body: string;
  prayerId: number;
};
