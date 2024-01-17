import React, { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  render() {
    return (
      <div className={css.Modal__backdrop}>
        <div className={css.Modal__content}>{this.props.children}</div>
      </div>
    );
  }
}
