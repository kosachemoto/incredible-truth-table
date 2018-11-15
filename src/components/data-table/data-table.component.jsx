import React from 'react';
import './data-table.component.css';

export class DataTableComponent extends React.Component {
  render() {
    return (
      <div className="data-table-component">
        <table className="data-table_table">
          <thead>
            <tr className="data-table_row">
              {this.props.dataHeader.map((variable, index) => (
                <th key={index} className="data-table_header">{variable}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* <tr className="data-table_row">
              <td className="data-table_cell">false</td>
              <td className="data-table_cell">true</td>
              <td className="data-table_cell">true</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    );
  }
}
