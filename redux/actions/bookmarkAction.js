import { ActionsTypes } from "../constants/action-types";

export const addBookMark = (bookmark) => {
    return {
        type: ActionsTypes.ADD_BOOKMARK,
        payload: bookmark
    }
}

export const removeBookMark = (bookmark) => {
    return {
        type: ActionsTypes.DELETE_BOOKMARK,
        payload: bookmark
    }
}