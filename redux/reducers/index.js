import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer";
import { sourceReducer } from "./sourceReducer";
import { bookMarkReducer } from "./bookMarkReducer";

const reducers = combineReducers({
    category: categoryReducer,
    source: sourceReducer,
    bookMark: bookMarkReducer
})

export default reducers;