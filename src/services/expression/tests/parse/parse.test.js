import { ExpressionService } from '../../expression.service';
import { fixtures } from './fixtures';

describe("ExpressionService.parce()", () => {
  fixtures.filter(e => e.enabled).forEach(e => {
    test(`test: ${e.index}`, () => {
      const calculated = ExpressionService.parse(e.props.expression);

      expect(calculated).toEqual(e.expected);
    })
  });
})