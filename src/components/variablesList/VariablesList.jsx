import React, { Component } from 'react';
import VariableItem from './../variableItem';
import './VariablesList.css';

class VariablesList extends Component {
  constructor(props) {
    super(props);

    console.log("varlist.props:", props);
  }
  render() {
    return (
      <div className="variables-list-component">
        {this.props.data.map((variable, index) => (
          <VariableItem key={index} data={variable} />
        ))}
      </div>
    );
  }
}

export default VariablesList;
