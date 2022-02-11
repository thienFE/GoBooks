import { combineReducers } from "redux";
import bookReducer from "./bookReducer";
import cartReducer from "./cartReducer";
import keywordReducer from "./keywordReducer";

const rootReducer = combineReducers({
    books: bookReducer,
    keyword: keywordReducer,
    carts: cartReducer
})

export default rootReducer