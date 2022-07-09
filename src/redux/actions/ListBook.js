import axios from "axios";
import *as ActionType from '../types/ListBook'

//GET LIST BOOK
export const getListBook = () => {
    return (dispatch) => {
        dispatch(actGetListBook_Request())
        axios
            .get('https://www.googleapis.com/books/v1/volumes?q=reactjs')
            .then(res => dispatch(actGetListBook_Success(res.data.items)))
            .catch(err => dispatch(actGetListBook_Error(err)))
    }
}

const actGetListBook_Request = () => {
    return {
        type: ActionType.GETLISTBOOK_REQUEST
    }
}
const actGetListBook_Success = (listBook) => {
    return {
        type: ActionType.GETLISTBOOK_SUCCESS,
        listBook
    }
}
const actGetListBook_Error = (error) => {
    return {
        type: ActionType.GETLISTBOOK_ERROR,
        error
    }
}