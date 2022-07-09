import *as ActionType from '../types/ListBook'

const initialState = {
    loading: false,
    listBook: null,
    error: null
}

const ListBookReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GETLISTBOOK_REQUEST: {
            state.loading = true
            state.listBook = null
            state.error = null
            return { ...state }
        }
        case ActionType.GETLISTBOOK_SUCCESS: {
            state.loading = false
            state.listBook = action.listBook
            state.error = null
            return { ...state }
        }
        case ActionType.GETLISTBOOK_ERROR: {
            state.loading = false
            state.listBook = null
            state.error = action.error
            return { ...state }
        }
        case ActionType.SEARCH_BOOK: {
            let arr = state.listBook.filter(item => item.volumeInfo.title.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1 ||
                item.volumeInfo.description.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1)
            state.listBook = arr
            return { ...state }
        }
        case ActionType.AUTHOR: {
            const author = action.payload.toString()
            let arr = state.listBook.filter(item => item.volumeInfo.authors.toString().toLowerCase().indexOf(author.toLowerCase()) !== -1)
            state.listBook = arr
            return { ...state }
        }
        default:
            return { ...state }
    }
}
export default ListBookReducer