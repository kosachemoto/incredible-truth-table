import React from 'react';
import './table-header.component.css';

export class TableHeaderComponent extends React.Component {
  render() {
    return (
      <thead className="table-header">
        <tr>
          { this.props.data.map((element, index) => (
            <td key={index} className="table-header__cell">{ element }</td>
          )) }
        </tr>
      </thead>
    )
  }
}