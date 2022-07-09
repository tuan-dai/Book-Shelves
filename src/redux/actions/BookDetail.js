import axios from "axios";
import *as ActionType from '../types/BookDetail'

//GET LIST BOOK
export const getBookDetail = (id) => {
    return (dispatch) => {
        dispatch(actGetBookDetail_Request())
        axios
            .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
            .then(res => dispatch(actGetBookDetail_Success(res.data)))
            .catch(err => dispatch(actGetBookDetail_Error(err)))
    }
}

const actGetBookDetail_Request = () => {
    return {
        type: ActionType.GETBOOKDETAIL_REQUEST
    }
}
const actGetBookDetail_Success = (bookDetail) => {
    return {
        type: ActionType.GETBOOKDETAIL_SUCCESS,
        bookDetail
    }
}
const actGetBookDetail_Error = (error) => {
    return {
        type: ActionType.GETBOOKDETAIL_ERROR,
        error
    }
}