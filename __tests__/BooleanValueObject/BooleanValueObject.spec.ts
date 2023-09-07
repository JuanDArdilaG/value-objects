import { BooleanValueObject } from "../../src/BooleanValueObject";

describe("BooleanValueObject", () => {
  it("should be true", () => {
    const booleanVO = BooleanValueObject.true();
    expect(booleanVO.valueOf()).toBe(true);
  });

  it("should be false", () => {
    const booleanVO = BooleanValueObject.false();
    expect(booleanVO.valueOf()).toBe(false);
  });

  it("should apply true or false equal true", () => {
    const booleanVO = BooleanValueObject.true().or(BooleanValueObject.false());
    expect(booleanVO.valueOf()).toBe(true);
  });

  it("should apply true or true equal true", () => {
    const booleanVO = BooleanValueObject.true().or(BooleanValueObject.true());
    expect(booleanVO.valueOf()).toBe(true);
  });

  it("should apply false or false equal false", () => {
    const booleanVO = BooleanValueObject.false().or(BooleanValueObject.false());
    expect(booleanVO.valueOf()).toBe(false);
  });

  it("should apply false and true equal false", () => {
    const booleanVO = BooleanValueObject.false().and(BooleanValueObject.true());
    expect(booleanVO.valueOf()).toBe(false);
  });

  it("should apply true and true equal true", () => {
    const booleanVO = BooleanValueObject.true().and(BooleanValueObject.true());
    expect(booleanVO.valueOf()).toBe(true);
  });

  it("should apply not false equal true", () => {
    const booleanVO = BooleanValueObject.false().not();
    expect(booleanVO.valueOf()).toBe(true);
  });

  it("should apply not true equal false", () => {
    const booleanVO = BooleanValueObject.true().not();
    expect(booleanVO.valueOf()).toBe(false);
  });

  it("should retrive string representation", () => {
    let booleanVO = BooleanValueObject.true();
    expect(booleanVO.toString()).toBe("true");
    booleanVO = BooleanValueObject.false();
    expect(booleanVO.toString()).toBe("false");
  });
});
