export class ExpressionService {
  // Parse expression and retun all variables
  static parse(expression) {
    const regexp = /[\s!&|()=<>]|\btrue\b|\bfalse\b|\s/gi;
    const variables = expression.split(regexp);

    return variables.filter((element, index, self) => {
        return element !== "" && self.indexOf(element) === index; 
      });
  }
  // Return set of values from `position` position 
  // and for truth table with `varCourn` variables
  static sourceDataValues(varCount, position) {
    return position
      .toString(2)
      .padStart(+varCount, "0")
      .split("")
      .map(value => Boolean(+value))
  }
  // Return executable function by `expression`
  // with appropriate count of variables-parameters
  static execFunctionBy(expression) {
    const variables = this.parse(expression);

    return new Function([...variables], `return ${expression}`);
  } 
}