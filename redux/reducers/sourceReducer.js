import { ActionsTypes } from "../constants/action-types";
import { JSON_RESPONSE,BUSINESS_NEWS,ENTERTAINMENT_NEWS,HEALTH_NEWS,SCIENCE_NEWS,SPORT_NEWS, TECH_NEWS } from "../../Config";

const initialState = {
    current_source : JSON_RESPONSE
}

export const sourceReducer = (state = initialState, { type, payload }) => {
    switch (type)
    {
        case ActionsTypes.SET_SOURCE:
            return {
                ...state,
                current_source: payload
            }
        default:
            return state;
    }
}