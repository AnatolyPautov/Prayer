export const GET_BOARDS = 'GET-BOARDS';
export const GET_PRAYERS = 'GET-PRAYERS';
export const GET_COMMENTS = 'GET-COMMENTS';

export const ADD_BOARD = 'ADD-BOARD';
export const ADD_PRAYER = 'ADD-PRAYER';
export const ADD_COMMENT = 'ADD-COMMENT';

export const REMOVE_BOARD = 'REMOVE-BOARD';
export const REMOVE_PRAYER = 'REMOVE-PRAYER';
export const REMOVE_COMMENT = 'REMOVE-COMMENT';

export const UPDATE_PRAYER = 'UPDATE-PRAYER';

export const getBoardsActionCreator = () => ({type: GET_BOARDS});
export const getPrayersActionCreator = () => ({type: GET_PRAYERS});
export const getCommentsActionCreator = () => ({type: GET_COMMENTS});

export const addBoardActionCreator = (title: string, description: string) => ({
  type: ADD_BOARD,
  payload: {title, description},
});
export const addPrayerActionCreator = (
  title: string,
  columnId: number,
  description: string,
  checked: boolean,
) => ({
  type: ADD_PRAYER,
  payload: {title, columnId, description, checked},
});
export const addCommentActionCreator = (body: string, prayerId: number) => ({
  type: ADD_COMMENT,
  payload: {body, prayerId},
});

export const removeBoardActionCreator = (id: number) => ({
  type: REMOVE_BOARD,
  payload: id,
});
export const removePrayerActionCreator = (id: number) => ({
  type: REMOVE_PRAYER,
  payload: id,
});
export const removeCommentActionCreator = (id: number) => ({
  type: REMOVE_COMMENT,
  payload: id,
});

export const updatePrayerActionCreator = (
  title: string,
  description: string,
  checked: boolean,
  id: number,
) => ({type: UPDATE_PRAYER, payload: {title, description, checked, id}});
