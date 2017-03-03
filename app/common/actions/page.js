//app/actions/page.js
//import fetch from 'isomorphic-fetch'
import { CALL_API } from 'redux-api-middleware'
import { PAGE_ENDPOINT } from '../constants/endpoints'
import {
  LOAD_PAGES_REQUEST,
  LOAD_PAGES_SUCCESS,
  LOAD_PAGES_FAILURE,
  LOAD_PAGE_REQUEST,
  LOAD_PAGE_SUCCESS,
  LOAD_PAGE_FAILURE,
  CREATE_PAGE_REQUEST,
  CREATE_PAGE_SUCCESS,
  CREATE_PAGE_FAILURE
} from '../constants/actionTypes'

export const loadPages = () => ({
  // return (dispatch) => {
  //   dispatch({
  //     type: 'LOAD_PAGES_REQUEST'
  //   })
  //
  //   fetch('http://localhost:5000/api/v1/pages')
  //     .then((response) => response.json())
  //     .then(
  //       (pages) => dispatch({
  //         type: 'LOAD_PAGES_SUCCESS',
  //         pages
  //       }),
  //       (error) => dispatch({
  //         type: 'LOAD_PAGES_FAILURE'
  //       })
  //     )
  // }

  [CALL_API]: {
    endpoint: 'http://localhost:5000/api/v1/pages',
    method: 'GET',
    types: [LOAD_PAGES_REQUEST,LOAD_PAGES_SUCCESS,LOAD_PAGES_FAILURE]
  }
})

export const loadPage = (id) => ({
  [CALL_API]: {
    endpoint:  `http://localhost:5000/api/v1/pages/${id}`,
    method: 'GET',
    types: [LOAD_PAGE_REQUEST, LOAD_PAGE_SUCCESS, LOAD_PAGE_FAILURE]
  }
})

export const createPage = (values) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: 'http://localhost:5000/api/v1/pages',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(values),
        types: [CREATE_PAGE_REQUEST, CREATE_PAGE_SUCCESS, CREATE_PAGE_FAILURE]
      }
    }
  )
)
