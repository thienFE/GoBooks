import { GET_BOOKS } from "../types"

const initialState = {
    books: []
}

const bookReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_BOOKS: 
            return {
                ...state,
                books: action.payload
            }

        default: return state
    }
}

export default bookReducer