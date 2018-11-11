import { ExpressionService } from '../../expression.service';
import { fixtures } from './fixtures';

const expression = new ExpressionService();

describe("ExpressionService.getCalculatedTableValues()", () => {
  fixtures.filter(e => e.enabled).forEach(e => {
    test(`test: ${e.index}`, () => {
      const calculated = expression.getCalculatedTableValues(e.props.variables, e.props.expression);
      expect(calculated).toEqual(e.expected);
    })
  });
})