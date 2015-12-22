'use strict';

import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistState } from 'redux-devtools';
import reducer from './app/reducer';
import DevTools from './app/DevTools.react';

const createFinalStore = compose(
  applyMiddleware(thunk),
  DevTools.instrument(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)
 )
)(createStore);

export default function configureStore(initialState) {
  return createFinalStore(reducer, initialState);
}
