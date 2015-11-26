'use strict';

import { Map, List } from 'immutable';
import * as actions from './actions';

const initialState = Map({
  pending: false,
  items: List()
});

export default function(state = initialState, action) {
  switch (action.type) {
    case actions.REQUEST_PASSPHRASE_PENDING:
      state = state.set('pending', action.pending);
      break;

    case actions.RECEIVE_PASSPHRASE:
      state = state.set(
        'items',
        state.get('items').push(action.passphrase)
      ).set('pending', false);
      break;
  }

  return state;
}
