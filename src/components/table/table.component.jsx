import React from 'react';

import { TableHeaderComponent } from './../../components';
import { TableBodyComponent } from './../../components';

import './table.component.css';

export class TableComponent extends React.Component {
  render() {
    return (
      <table className="table">
        <TableHeaderComponent data={this.props.header} />
        <TableBodyComponent data={this.props.body} />
      </table>
    )
  }
}