import { ExpressionService } from '../../expression.service';
import { fixtures } from './fixtures';

describe("ExpressionService.execFunctionBy()", () => {
  fixtures.filter(e => e.enabled).forEach(e => {
    test(`test: ${e.index}`, () => {
      const calculated = ExpressionService.execFunctionBy(e.props.expression);

      expect(calculated).toBe(0);
    })
  });
})