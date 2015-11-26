'use strict';

import React, { PropTypes, Component } from 'react';
import { Motion, spring } from "react-motion";


export default class Button extends Component {

  static propTypes = {
    pending: PropTypes.bool,
    onClick: PropTypes.func
  }

  static defaultProps = {
    pending: false
  }

  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };
  }

  handleClick() {
    const { pending, onClick } = this.props;

    if (!pending && onClick) {
      onClick();
    }
  }

  onHover() {
    this.setState({
      hover: !this.state.hover
    });
  }

  render() {
    const { hover } = this.state;
    const { pending } = this.props;
    const maxSize = 150;
    const minSize = 40;
    const montionStyle = {
      x: spring(pending ? minSize : maxSize, [210, 20])
    };

    return (
      <Motion style={montionStyle}>
        {({x}) => {
          const style = {
            button: {
              display: 'inline-block',
              width: `${x}px`,
              color: '#ffffff',
              backgroundColor: (hover || pending) ? '#337ab7' : '#0275d8',
              backgroundImage: (pending) ? 'url(/static/img/throbber.gif)' : 'none',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center center',
              padding: '10px 0',
              borderRadius: '20px',
              textAlign: 'center',
              WebkitBorderRadius: '20px',
              MsBorderRadius: '20px',
              OBorderRadius: '20px',
              cursor: (pending) ? 'progress' : 'pointer'
            },
            content: {
              opacity: (x - minSize - 40) / ((maxSize - minSize - 20)/100)
            }
          };

          return (
            <div style={style.button}
                 onClick={() => this.handleClick()}
                 onMouseEnter={() =>this.onHover()}
                 onMouseLeave={() =>this.onHover()}>
              <div style={style.content}>
                Generate
              </div>
            </div>
          );
        }}
      </Motion>
    )

  }

}
