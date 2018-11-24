import React from 'react';
import { InputComponent } from './../../components';
import { ButtonComponent } from './../../components';
import './input-form.container.css';

export class InputFormContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      expression: ""
    }

    this.onButtonClick = this.onButtonClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onButtonClick() {
    this.props.onChange(this.state.expression);
  }

  onInputChange(event) {
    const inputValue = event.target.value;
    this.setState({
      expression: inputValue
    });
  }

  render() {
    return (
      <div>
        <InputComponent data={this.expression} onChange={this.onInputChange} />
        <ButtonComponent onClick={this.onButtonClick} />
      </div>
    )
  }
}