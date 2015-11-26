'use strict';

import { combineReducers } from 'redux';

import passphrase from '../passphrase/reducer';

const reducer = combineReducers({
  passphrase
});

export default reducer;
