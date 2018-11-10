export class ExpressionService {
  getCalculatedRowValues(variables, values, expression) {
    const dataObject = this.getDataObject(variables, values);
    const execExpression = this.getExecExpression(variables, values, expression);
    
    let arr = variables.reduce((result, variable) => {
      result.push(dataObject[variable]);
      return result;
    }, []);

    arr.push(eval(execExpression).toString());

    return arr;
  }

  getExecExpression(variables, values, expression) {
    const dataObject = this.getDataObject(variables, values);
    const sortedVariables = variables.slice().sort((a, b) => b.length - a.length);

    return sortedVariables.reduce((execExpression, variable) => {
      return execExpression.replace(new RegExp(variable, "g"), dataObject[variable])
    }, expression);
  }

  getDataObject(variables, values) {
    const varLength = variables.length;
    const correctedValues = values.padStart(varLength, "0");

    return variables.reduce((obj, variable, index) => {
      const resultValue = new Boolean(+correctedValues[index]).toString();
      
      obj[variable] = resultValue;
      return obj;
    }, {});
  }
}