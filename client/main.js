'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import App from './app/App.react';
import DevTools from './app/DevTools.react'

const store = configureStore();

render(
  <Provider store={store}>
    <div>
      <App />
      {(__DEBUG__) ? <DevTools /> : null}
    </div>
  </Provider>,
  document.getElementById('diceware')
);
