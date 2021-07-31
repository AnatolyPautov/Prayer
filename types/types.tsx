export type Board = {
  id: string;
  text: string;
};
export type Prayer = {
  id: string;
  text: string;
  boardId: string;
  answered: boolean;
};
export type Comment = {
  id: string;
  text: string;
  prayerId: string;
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
  answered: boolean;
};
export type NewComment = {
  text: string;
  prayerId: string;
};
