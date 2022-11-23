import { ActionsTypes } from "../constants/action-types";

export const setSource = (source) => {
    return {
        type: ActionsTypes.SET_SOURCE,
        payload: source
    }
}