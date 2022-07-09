import *as ActionType from '../types/BookDetail'

const initialState = {
    loading: false,
    bookDetail: null,
    error: null,
    amount: 1
}

const BookDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GETBOOKDETAIL_REQUEST: {
            state.loading = true
            state.bookDetail = null
            state.error = null
            return { ...state }
        }
        case ActionType.GETBOOKDETAIL_SUCCESS: {
            state.loading = false
            state.bookDetail = action.bookDetail
            state.error = null
            return { ...state }
        }
        case ActionType.GETBOOKDETAIL_ERROR: {
            state.loading = false
            state.bookDetail = null
            state.error = action.error
            return { ...state }
        }
        case ActionType.AMOUNT: {
            if (action.status) {
                state.amount += 1
            } else {
                if (state.amount <= 1) {
                    return
                } else state.amount -= 1
            }
            return { ...state }
        }
        default:
            return { ...state }
    }
}
export default BookDetailReducer