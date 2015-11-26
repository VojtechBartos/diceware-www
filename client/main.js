'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import configureStore from './configureStore';
import App from './app/App.react';

const store = configureStore();

render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
    {(() => {
      if (!__DEBUG__) return null;

      return (
        <DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} visibleOnLoad={false} />
        </DebugPanel>
      );
    })()}
  </div>,
  document.getElementById('diceware')
);
