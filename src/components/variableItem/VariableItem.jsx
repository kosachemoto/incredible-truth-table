import React, { Component } from 'react';
import './VariableItem.css';

class VariableItem extends Component {
  render() {
    return (
      <div className="variable-item-component">
        {this.props.data}
      </div>
    );
  }
}

export default VariableItem;
