import React, { Component } from 'react';
import './Edit.css';

class Edit extends Component {
  render() {
    return (
      <div className="edit-component">
        <input type="text" value={this.props.data} onChange={this.props.onChange} />
      </div>
    );
  }
}

export default Edit;
