import React from 'react';
import './button.component.css';

export class ButtonComponent extends React.Component {
  render() {
    return (
      <>
        <button className="button__button" onClick={this.props.onClick}>Click me</button>
      </>
    )
  }
}