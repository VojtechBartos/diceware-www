'use strict';

import fetch from 'isomorphic-fetch';
import URL from 'url-parse';

export const REQUEST_PASSPHRASE_PENDING = 'REQUEST_PASSPHRASE_PENDING';
export const RECEIVE_PASSPHRASE = 'RECEIVE_PASSPHRASE';

function receivePassphrase(passphrase) {
  return {
    type: RECEIVE_PASSPHRASE,
    passphrase
  }
}

function requestPassphrasePending(pending) {
  return {
    type: REQUEST_PASSPHRASE_PENDING,
    pending
  }
}

export function generatePassphrase(parts) {
  return dispatch => {
    dispatch(requestPassphrasePending(true));

    const url = new URL('/api/passphrase/generate/').set('query', {
      parts: parseInt(parts) || 5
    });

    return fetch(url.toString())
      .then(response => response.json())
      .then(json => {
        // NOTICE(vojta) setting up delay just because of animation of button
        setTimeout(() => {
          dispatch(receivePassphrase(json.data.passphrase));
        }, 500);
      });
  };
}
