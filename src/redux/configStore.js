import { combineReducers } from "redux";
import ListBookReducer from '../redux/reducers/ListBook'
import BookDetailReducer from '../redux/reducers/BookDetail'

const rootReducer = combineReducers({
    ListBookReducer,
    BookDetailReducer
})
export default rootReducer