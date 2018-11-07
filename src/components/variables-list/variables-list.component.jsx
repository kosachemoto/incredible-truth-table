import React from 'react';
import { VariableItemComponent } from '../../components';
import './variables-list.component.css';

export class VariablesListComponent extends React.Component {
  constructor(props) {
    super(props);

    console.log("varlist.props:", props);
  }
  render() {
    return (
      <div className="variables-list-component">
        {this.props.data.map((variable, index) => (
          <VariableItemComponent key={index} data={variable} />
        ))}
      </div>
    );
  }
}