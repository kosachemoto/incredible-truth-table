import React from 'react';

import { TableHeaderComponent } from './../../components';
import { TableBodyComponent } from './../../components';

import './table.component.css';

export class TableComponent extends React.Component {
  render() {
    return (
      <>
        This is TableComponent Component!
        <TableHeaderComponent />
        <TableBodyComponent />
      </>
    )
  }
}