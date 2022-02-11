import { ADD_CART } from "../types";

const initialState = {
  carts: JSON.parse(localStorage.getItem("carts")) ?? []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART: {
      let newCarts = [...state.carts];

      let check = false;
      newCarts.map((item) => {
        if (item.id === action.payload.id) {
          check = true;
          item.quantity++;
          return item;
        }
        return item;
      });
      if (!check) {
        newCarts.push(action.payload);
      }
      localStorage.setItem(
        "carts",
        JSON.stringify(newCarts)
      );
      return {
        ...state,
        carts: newCarts,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
