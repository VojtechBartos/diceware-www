'use strict';

import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Passphrase from '../passphrase/Passphrase.react';
import * as passphraseActions from '../passphrase/actions';

class App extends Component {

  render() {
    return (
      <div style={style.container}>
        <h1 style={style.h1}>
          Diceware passphrase generator
        </h1>

        <div style={style.description}>
          Diceware™ is a method for picking passphrases that uses dice to
          select words at random from a special list called the Diceware Word
          List.
        </div>

        <ul style={style.linksList}>
          <li style={style.linksItem}>
            <a style={style.link}
               href="https://github.com/VojtechBartos/diceware-www">
              github
            </a>
          </li>
          <li>
            <a style={style.link} href="http://docs.diceware.apiary.io/#">
              API documentation
            </a>
          </li>
        </ul>

        <Passphrase {...this.props} />
      </div>
    );
  }

}

function mapStateToProps(state) {
  return { ...state };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(passphraseActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


const style = {
  h1: {
    textAlign: 'center',
    fontSize: '50px',
    marginBottom: '20px'
  },
  description: {
    maxWidth: '800px',
    textAlign: 'center',
    lineHeight: '150%',
  },
  linksList: {
    listStyle: 'none',
    width: '230px',
    marginBottom: '25px'
  },
  linksItem: {
    float: 'left',
    marginRight: '10px'
  },
  link: {
    textAlign: 'center',
    color: '#4a4949'
  },
  container: {
    display: '-webkit-flex',
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}
