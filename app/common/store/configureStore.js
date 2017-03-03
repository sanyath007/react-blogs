//app/store/configureStore.js
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

/** Step 1 */
// const promise = (store) => {
//   const next  = store.dispatch
//
//   return (action) => {
//     if(typeof action.then === 'function')
//       return action.then(next)
//     return next(action)
//   }
// }

/** Step 2 */
// const thunk = (store) => (next) => (action) => {
//   (typeof action === 'function') ? action(store.dispatch, store.getState) : next(action)
// }

export default () => {
  const middlewares = [thunk, apiMiddleware]

  if(process.env.NODE_ENV !== 'production'){
    middlewares.push(createLogger())
  }

  const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  )

  //store.dispatch = promise(store)

  if(module.hot) {
    module.hot.accept('../reducers', () => {
      System.import('../reducers').then((nextRootReducer) => {
          //const nextRootReducer = require('../reducers')
          store.replaceReducer(nextRootReducer.default)
      })
    })
  }

  return store
}
