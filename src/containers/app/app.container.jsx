import React from 'react';
import { EditComponent } from '../../components';
import { VariablesListComponent } from './../../components';
import { DataTableComponent } from './../../components';
import { ExpressionService } from './../../services';
import './app.container.css';

export class AppContainer extends React.Component {
  expressionService = new ExpressionService();

  constructor(props) {
    super(props);

    this.state = {
      expression: "",
      variables: []
    }


    this.onEditChange = this.onEditChange.bind(this);
    this.parseExpression = this.parseExpression.bind(this);
  }

  onEditChange(event) {
    const value = event.target.value;

    this.setState({
      expression: value,
      variables: this.parseExpression(value)
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
        <EditComponent data={this.state.expression} onChange={this.onEditChange} />
        <VariablesListComponent data={this.state.variables} />
        <DataTableComponent 
          dataHeader={this.expressionService.getTHead(this.state.variables, this.state.expression)} 
          dataBody={this.expressionService.getCalculatedTBodyValues(this.state.variables, this.state.expression)} />
      </div>
    )
  }
}