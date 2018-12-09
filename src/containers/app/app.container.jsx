import React from 'react';

import { VariablesListComponent } from './../../components';
import { DataTableComponent } from './../../components';

import { InputFormContainer } from './../../containers';
import { DataGridContainer } from './../../containers';

import './app.container.css';

export class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expression: ""
    }

    this.onInputFormChange = this.onInputFormChange.bind(this);
  }

  onInputFormChange(inputValue) {
    this.setState({
      expression: inputValue
    });
  }

  render() {
    return (
      <div className="app-component">
        <h1 className="app-header">Incredible Truth Table</h1>
        <InputFormContainer onChange={this.onInputFormChange} />
        <DataGridContainer expression={this.state.expression} />
      </div>
    )
  }
}