import React from 'react';

import { TableComponent } from './../../components';

import { ExpressionService } from './../../services';

import './data-grid.container.css';

export class DataGridContainer extends React.Component {
  generateTableBody(expression) {
    const variables = ExpressionService.parse(expression);
    const exec = ExpressionService.execFunctionBy(expression);

    const length = variables.length;
    const sourceDataCount = length ? Math.pow(2, length) : 0;
    const tBodyData = []; // Mutable

    for (let i = 0; i < sourceDataCount; i++) {
      const sourceData = ExpressionService.sourceDataValues(length, i);
      const row = [...sourceData, exec(...sourceData)];
      tBodyData.push(row);
    }

    return tBodyData;
  }

  render() {
    const expression = this.props.expression;
    const variables = ExpressionService.parse(expression);

    const header = variables.length ? [...variables, expression] : [];
    const body = this.generateTableBody(expression);

    return (
      <div className="data-grid">
        <TableComponent header={header} body={body} />
      </div>
    )
  }
}