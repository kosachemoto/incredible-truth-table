export class ExpressionService {
  getTHead(variables, expression) {
    return [...variables, expression];
  }

  getCalculatedTBodyValues(variables, expression) {
    const varLength = variables.length;
    const rows = Math.pow(2, varLength);
    let result = [];

    for (let i = 0; i < rows; i++) {
      const values = i.toString(2);
      result.push(this.getCalculatedRowValues(variables, values, expression));
    }

    return result;
  }

  getCalculatedRowValues(variables, values, expression) {
    const dataObject = this.getDataObject(variables, values);
    const execExpression = this.getExecExpression(variables, values, expression);
    
    let arr = variables.reduce((result, variable) => {
      result.push(new Boolean(+dataObject[variable]).toString());
      return result;
    }, []);

    try {
      arr.push(new Boolean(+eval(execExpression)).toString());
    } 
    catch(e) {
      console.warn(e.message);
    }

    return arr;
  }

  getExecExpression(variables, values, expression) {
    const dataObject = this.getDataObject(variables, values);
    const sortedVariables = [...variables].sort((a, b) => b.length - a.length);

    return sortedVariables.reduce((execExpression, variable) => {
      return execExpression.replace(new RegExp(variable, "g"), dataObject[variable])
    }, expression);
  }

  getDataObject(variables, values) {
    const varLength = variables.length;
    const correctedValues = values.padStart(varLength, "0");

    return variables.reduce((obj, variable, index) => {
      const resultValue = correctedValues[index];
      
      obj[variable] = resultValue;
      return obj;
    }, {});
  }
}