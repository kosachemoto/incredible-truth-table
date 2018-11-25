import React from 'react';
import './table-body.component.css';

export class TableBodyComponent extends React.Component {
  render() {
    return (
      <tbody className="table-body">
        { this.props.data.map((rowData, index) => (
          <tr key={index}>
            { rowData.map((element, index) => (
              <td key={index} className="table-body__cell">{ element }</td>
            )) }
          </tr>
        )) }
      </tbody>
    )
  }
}