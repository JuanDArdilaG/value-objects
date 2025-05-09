import { describe, it, expect } from "vitest";
import { BooleanValueObject } from "../src/BooleanValueObject";

describe("BooleanValueObject", () => {
  it("named constructor should return true vo", () => {
    const booleanVO = BooleanValueObject.true();
    expect(booleanVO.value).toBe(true);
  });

  it("named constructor should return false vo", () => {
    const booleanVO = BooleanValueObject.false();
    expect(booleanVO.value).toBe(false);
  });

  it("true or false should should be true", () => {
    const booleanVO = BooleanValueObject.true().or(BooleanValueObject.false());
    expect(booleanVO.value).toBe(true);
  });

  it("true or true should should be true", () => {
    const booleanVO = BooleanValueObject.true().or(BooleanValueObject.true());
    expect(booleanVO.value).toBe(true);
  });

  it("false or false should should be false", () => {
    const booleanVO = BooleanValueObject.false().or(BooleanValueObject.false());
    expect(booleanVO.value).toBe(false);
  });

  it("false and true should should be false", () => {
    const booleanVO = BooleanValueObject.false().and(BooleanValueObject.true());
    expect(booleanVO.value).toBe(false);
  });

  it("true and true should should be true", () => {
    const booleanVO = BooleanValueObject.true().and(BooleanValueObject.true());
    expect(booleanVO.value).toBe(true);
  });

  it("not false should be true", () => {
    const booleanVO = BooleanValueObject.false().not();
    expect(booleanVO.value).toBe(true);
  });

  it("not true should be false", () => {
    const booleanVO = BooleanValueObject.true().not();
    expect(booleanVO.value).toBe(false);
  });

  it("should retrive string representation of boolean value", () => {
    let booleanVO = BooleanValueObject.true();
    expect(booleanVO.toString()).toBe("true");
    booleanVO = BooleanValueObject.false();
    expect(booleanVO.toString()).toBe("false");
  });
});
