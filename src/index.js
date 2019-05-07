import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { createLogger } from 'redux-logger'
import { createBrowserHistory } from "history"
import { routerMiddleware, ConnectedRouter } from 'connected-react-router'
import { Switch, Route } from "react-router-dom"

import rootReducers from "./reducers"
import './styles/index.scss';
import AppContainer from './containers/App'
import AccountContainer from "./containers/Account"
import * as serviceWorker from './serviceWorker';


const history = createBrowserHistory()

const logger = createLogger({
  collapsed: true,
  diff: true,
})

const store = createStore(
  rootReducers(history),
  composeWithDevTools(
    applyMiddleware(
      logger,
      routerMiddleware(history),
    )
  )
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={AppContainer} />
        <Route path="/account" component={AccountContainer} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
