import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-snapshot';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {  Router, Route,  browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import { CookiesProvider } from 'react-cookie';


import './index.css';
import App from './App';
import * as reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

import config from './config';

const rootRoute = {
  path: '/',

  /**
     * getComponent
     * @param location
     * @param cb {Function} callback
     */
	getComponent(location, cb) {
		cb(null, App);
	},

  /**
     * getChildRoutes
     * @param location
     * @param cb {Function} callback
     */
  getChildRoutes(location, cb) {
    cb(null, [
      require('./routes/ListingDetails'),
      require('./routes/ListingList'),
      require('./routes/SampleRETS')
    ]);
  },
};

let store = createStore(
  combineReducers({
    ...reducers,

    routing: routerReducer
  }),
  applyMiddleware(thunk),
);

/**
 * history
 */
const history = syncHistoryWithStore(browserHistory, store);

const appElm = document.getElementById('root')

/**
 * render Provider
 */
render(
  <CookiesProvider>
    <Provider store={store}>
      <Router
        history={history}
        onUpdate={() => appElm.scrollIntoView()}
        routes={rootRoute}
      />
    </Provider>
  </CookiesProvider>,
  appElm
);
// registerServiceWorker();
