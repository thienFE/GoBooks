import { ADD_KEYWORD } from "../types"

const initialState = {
    keyword: ""
}

const keywordReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_KEYWORD: {
            return {
                ...state,
                keyword: action.payload
            }
        }

        default: return state
    }
}

export default keywordReducer