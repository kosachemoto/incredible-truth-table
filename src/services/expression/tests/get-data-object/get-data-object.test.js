import { ExpressionService } from "../../expression.service";
import { fixtures } from './fixtures';

const expression = new ExpressionService();

describe("ExpressionServices.getDataObject()", () => {
  fixtures.filter(e => e.enabled).forEach(e => {
    test(`test: ${e.index}`, () => {
      const calculated = expression.getDataObject(e.props.variables, e.props.values);
      
      expect(calculated).toEqual(e.expected);
    })
  });
})