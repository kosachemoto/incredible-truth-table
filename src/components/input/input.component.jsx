import React from 'react';
import './input.component.css';

export class InputComponent extends React.Component {
  render() {
    return (
      <div className="input">
        <input className="input__input" type="text" value={this.props.data} onChange={this.props.onChange} />
      </div>
    )
  }
}