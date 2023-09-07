import {
  BooleanValueObject,
  BooleanValueObjectOperator,
} from "../../src/BooleanValueObject";

describe("plus", () => {
  it("true + true", () => {
    const operator = new BooleanValueObjectOperator(true);
    const result = operator.plus(BooleanValueObject.true());
    expect(result.valueOf()).toBe(true);
  });

  it("true + false", () => {
    const operator = new BooleanValueObjectOperator(true);
    const result = operator.plus(BooleanValueObject.false());
    expect(result.valueOf()).toBe(true);
  });

  it("false + true", () => {
    const operator = new BooleanValueObjectOperator(false);
    const result = operator.plus(BooleanValueObject.true());
    expect(result.valueOf()).toBe(true);
  });

  it("false + false", () => {
    const operator = new BooleanValueObjectOperator(false);
    const result = operator.plus(BooleanValueObject.false());
    expect(result.valueOf()).toBe(false);
  });
});

describe("substract", () => {
  it("should throw an error", () => {
    const operator = new BooleanValueObjectOperator(false);
    expect(() => operator.substract(BooleanValueObject.false())).toThrow();
  });
});
