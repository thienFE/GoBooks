import axios from "axios";
import { GET_BOOKS } from "../types";

export const getBooks = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3000/books");
    dispatch({
      type: GET_BOOKS,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};
