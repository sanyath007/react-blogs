//app/reducers/pages.js
import {
  LOAD_PAGES_SUCCESS,
  LOAD_PAGE_SUCCESS
} from '../constants/actionTypes'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PAGES_SUCCESS:
      // return action.pages
      return action.payload
    case LOAD_PAGE_SUCCESS:
      // return action.pages
      return [action.payload]
    default:
      return state
  }
}

export const getPageById = (state, id) => (
  state.pages.find((page) => page.id === +id) || { title: '', content: '' }
)
