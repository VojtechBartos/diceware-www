'use strict';

import { bindActionCreators } from 'redux';
import { Map } from 'immutable';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button.react';
import CopyToClipboard from 'react-copy-to-clipboard';

export default class Password extends Component {

  static propTypes = {
    generatePassphrase: PropTypes.func.isRequired,
    copiedPassphrase: PropTypes.func.isRequired,
    passphrase: PropTypes.instanceOf(Map)
  }

  componentDidMount() {
    this.generatePassphrase();
  }

  generatePassphrase() {
    this.props.generatePassphrase();
  }

  onClipboardCopy() {
    this.props.copiedPassphrase();
  }

  render() {
    const pending = this.props.passphrase.get('pending', false);

    return (
      <div style={style.block}>
        {this.renderPassphrase()}

        <Button onClick={() => this.generatePassphrase()} pending={pending} />
      </div>
    );
  }

  renderPassphrase() {
    const passphrase = this.props.passphrase.get('items').last();
    const copied = this.props.passphrase.get('copied', false);
    if (!passphrase)
      return null;

    return (
      <CopyToClipboard text={passphrase.text}
                       onCopy={() => this.onClipboardCopy()}>
        <div style={style.passphrase}>
          <div style={style.copied}>
            {(copied) ? 'Copied to clipboad' : 'Click to clipboad'}
          </div>

          {passphrase.parts.join(' ')}
        </div>
      </CopyToClipboard>
    );
  }

}

const style = {
  block: {
    display: 'block',
    textAlign: 'center'
  },
  passphrase: {
    position: 'relative',
    cursor: 'pointer',
    padding: '30px',
    fontSize: '50px',
    marginBottom: '20px',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    borderRadius: '10',
    WebkitBorderRadius: '10',
    MsBorderRadius: '10',
    OBorderRadius: '10'
  },
  copied: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: '10px',
    color: '#cfcfcf',
    fontSize: '13px'
  }
};
