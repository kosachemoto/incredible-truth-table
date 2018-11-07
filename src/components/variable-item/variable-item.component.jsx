import React from 'react';
import './variable-item.component.css';

export class VariableItemComponent extends React.Component {
  render() {
    return (
      <div className="variable-item-component">
        {this.props.data}
      </div>
    );
  }
}