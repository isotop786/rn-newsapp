import { ActionsTypes } from "../constants/action-types";

const initialState = {
    bookMarks:[]
}

export const bookMarkReducer = (state = initialState, { type, payload }) => {
    switch (type)
    {
        case ActionsTypes.ADD_BOOKMARK:
            return {
                ...state,
                bookMarks: [...state.bookMarks, payload]
            }
        
        default:
            return state;
    }
}