import React from 'react';

import { TableComponent } from './../../components';

import './data-grid.container.css';

export class DataGridContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const header = ["a", "b", "a && b"];
    const body = [
      ["false", "false", "false"],
      ["true", "false", "false"],
      ["false", "true", "false"],
      ["true", "true", "true"],
    ];
    
    return (
      <div className="data-grid">
        <TableComponent header={header} body={body} />
      </div>
    )
  }
}