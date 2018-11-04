import React, { Component } from 'react';
import Edit from './../../components/edit';
import VariablesList from './../../components/variablesList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataString: "",
      variables: []
    }

    this.onEditChange = this.onEditChange.bind(this);
    this.parseDataString = this.parseDataString.bind(this);
  }

  onEditChange(event) {
    const value = event.target.value;

    this.setState({
      dataString: value,
      variables: this.parseDataString(value)
    });
  }

  componentDidMount() {
    this.setState(state => ({
      variables: this.parseDataString(state.dataString)
    }));
  }

  parseDataString(dataString) {
    const regexp = /[\s!&|()=<>]/g;
    
    const variablesList = dataString.split(regexp)
      .filter((element, index, self) => {
        return element !== "" && self.indexOf(element) === index; 
      });

    return variablesList;
  }

  render() {
    return (
      <div className="app-component">
        <h1 className="app-header">Incredible Truth Table</h1>
        <Edit data={this.state.dataString} onChange={this.onEditChange} />
        <VariablesList data={this.state.variables} />
      </div>
    )
  }
}

export default App;
