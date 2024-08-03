import {
  BooleanValueObject,
  BooleanValueObjectOperator,
} from "../../src/BooleanValueObject";

describe("BooleanValueObjects addition (+)", () => {
  it("true + true should be true", () => {
    const operator = new BooleanValueObjectOperator(true);
    const result = operator.plus(BooleanValueObject.true()).value;
    expect(result.valueOf()).toBe(true);
  });

  it("true + false should be true", () => {
    const operator = new BooleanValueObjectOperator(true);
    const result = operator.plus(BooleanValueObject.false()).value;
    expect(result.valueOf()).toBe(true);
  });

  it("false + true should be true", () => {
    const operator = new BooleanValueObjectOperator(false);
    const result = operator.plus(BooleanValueObject.true()).value;
    expect(result.valueOf()).toBe(true);
  });

  it("false + false should be false", () => {
    const operator = new BooleanValueObjectOperator(false);
    const result = operator.plus(BooleanValueObject.false()).value;
    expect(result.valueOf()).toBe(false);
  });
});
