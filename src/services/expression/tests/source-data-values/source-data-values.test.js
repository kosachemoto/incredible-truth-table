import { ExpressionService } from '../../expression.service';
import { fixtures } from './fixtures';

describe("ExpressionService.sourceDataValues()", () => {
  fixtures.filter(e => e.enabled).forEach(e => {
    test(`test: ${e.index}`, () => {
      const calculated = ExpressionService.sourceDataValues(e.props.varCount, e.props.position);

      expect(calculated).toEqual(e.expected);
    })
  });
})