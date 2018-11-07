import React from 'react';
import './edit.component.css';

export class EditComponent extends React.Component {
  render() {
    return (
      <div className="edit-component">
        <input type="text" value={this.props.data} onChange={this.props.onChange} />
      </div>
    );
  }
}