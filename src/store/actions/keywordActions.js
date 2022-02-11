import { ADD_KEYWORD } from "../types";

export const addKeyword = (keyword) => (dispatch) => {
  dispatch({
    type: ADD_KEYWORD,
    payload: keyword,
  });
};
