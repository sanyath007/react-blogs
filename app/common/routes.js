//routes.js
import React from 'react'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, IndexRoute } from 'react-router'
import { Pages, ShowPage, NewPage } from './containers'
import { App, Home, About } from './components'

export default (store, history) => {
  return (
  	<Router history={syncHistoryWithStore(history, store)}>
  		<Route path='/' component={App}>
  			<IndexRoute component={Home} />
        <Route path='about' component={About} />
        {/* ================= Pages route ================= */}
  			<Route path='pages'>
          <IndexRoute component={Pages} />
          <Route path='new' component={NewPage} />
          <Route path=':id' component={ShowPage} />
        </Route>
  		</Route>
  	</Router>
  )
}
