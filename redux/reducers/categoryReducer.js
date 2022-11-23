import { ActionsTypes } from "../constants/action-types";

const initialState = {
    current_category:'Latest'
}

export const categoryReducer = (state = initialState, { type, payload }) => {
    switch (type)
    {
        case ActionsTypes.SET_CATEGORY:
            return {
                ...state,
                current_category: payload
            }
        
        default:
            return state;
    }
}