import React from 'react';

import { VariablesListComponent } from './../../components';
import { DataTableComponent } from './../../components';
import { ExpressionService } from './../../services';

import { InputFormContainer } from './../../containers';
import { DataGridContainer } from './../../containers';

import './app.container.css';

export class AppContainer extends React.Component {
  expressionService = new ExpressionService();

  constructor(props) {
    super(props);

    this.state = {
      expression: "",
      variables: []
    }

    this.parseExpression = this.parseExpression.bind(this);
    this.onInputFormChange = this.onInputFormChange.bind(this);
  }

  onInputFormChange(inputValue) {
    this.setState({
      expression: inputValue,
      variables: this.parseExpression(inputValue)
    });
  }

  componentDidMount() {
    this.setState(state => ({
      variables: this.parseExpression(state.expression)
    }));
  }

  parseExpression(expression) {
    const regexp = /[\s!&|()=<>]/g;
    
    const variablesList = expression.split(regexp)
      .filter((element, index, self) => {
        return element !== "" && self.indexOf(element) === index; 
      });

    return variablesList;
  }

  render() {
    return (
      <div className="app-component">
        <h1 className="app-header">Incredible Truth Table</h1>
        <InputFormContainer onChange={this.onInputFormChange} />
        <DataGridContainer data={this.state.expression} />
      </div>
    )
  }
}