import { ExpressionService } from '../../expression.service';
import { fixtures } from './fixtures';

const expression = new ExpressionService();

describe("ExpressionService.getCalculatedRowValues()", () => {
  fixtures.filter(e => e.enabled).forEach(e => {
    test(`test: ${e.index}`, () => {
      const calculated = expression.getCalculatedRowValues(e.props.variables, e.props.values, e.props.expression);
      
      expect(calculated).toEqual(e.expected);
    })
  });
})