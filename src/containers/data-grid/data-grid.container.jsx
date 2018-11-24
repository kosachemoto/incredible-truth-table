import React from 'react';

import { TableComponent } from './../../components';

import './data-grid.container.css';

export class DataGridContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="data-grid-container">
        <TableComponent />
      </div>
    )
  }
}