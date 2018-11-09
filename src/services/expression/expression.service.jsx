import React, { Component } from 'react';

export class ExpressionService extends Component {
  constructor(props) {
    super(props);

    const variables = ["a", "b", "c"];
    const values = "101";
    const expression = "a && b || c";

    // const result = this.getExecExpression(variables, values, expression);
    // console.log("my result:", result);

    this.getCalculatedRowValues(variables, values, expression);
  }

  getCalculatedRowValues(variables, values, expression) {
    const varLength = variables.length;
    const correctedValues = values.padStart(varLength, "0");
    const execExpression = this.getExecExpression(variables, values, expression);
    const arr = correctedValues.split("");

    console.log("arr:", arr);
    
    // let result = arr.reduce((calculatedRowValues, value, index) => {
    //   calculatedRowValues[calculatedRowValues.length - 1] = new Boolean(+value).toString();
    //   return calculatedRowValues;
    // }, [new Boolean(+eval(execExpression)).toString()]);

    // console.log("calc row:", result);
    // console.log("eval:", eval(execExpression));
  }

  getExecExpression(variables, values, expression) {
    const dataObject = this.getDataObject(variables, values);
    const sortedVariables = variables.sort((a, b) => b.length - a.length);

    return sortedVariables.reduce((execExpression, variable) => {
      return execExpression.replace(new RegExp(variable ,"g"), dataObject[variable])
    }, expression);
  }

  getDataObject(variables, values) {
    const varLength = variables.length;
    const correctedValues = values.padStart(varLength, "0");

    return variables.reduce((obj, variable, index) => {
      obj[variable] = correctedValues[index];
      return obj;
    }, {});
  }

  render() {
    return <div>ExpressionService</div>;
  }
}