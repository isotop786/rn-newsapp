import { ActionsTypes } from "../constants/action-types";

export const setCategory = (category) => {
    return {
        type: ActionsTypes.SET_CATEGORY,
        payload: category
    }
}



