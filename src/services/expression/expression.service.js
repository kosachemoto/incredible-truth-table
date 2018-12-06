export class ExpressionService {
  static parse(expression) {
    const regexp = /[\s!&|()=<>]|\btrue\b|\bfalse\b|\s/gi;
    const variables = expression.split(regexp);

    return variables.filter((element, index, self) => {
        return element !== "" && self.indexOf(element) === index; 
      });
  }
  }
}