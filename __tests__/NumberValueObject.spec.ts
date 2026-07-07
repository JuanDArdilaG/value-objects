import { describe, it, expect } from "vitest";
import { NumberValueObject } from "../src/NumberValueObject";
import { PriceValueObject } from "../src/PriceValueObject";

describe("NumberValueObject non-finite guards", () => {
  it("rejects NaN at construction", () => {
    expect(() => new NumberValueObject(NaN)).toThrow();
  });

  it("rejects Infinity at construction", () => {
    expect(() => new NumberValueObject(Infinity)).toThrow();
    expect(() => new NumberValueObject(-Infinity)).toThrow();
  });

  it("still accepts ordinary finite numbers", () => {
    expect(new NumberValueObject(0).value).toBe(0);
    expect(new NumberValueObject(-12.34).value).toBe(-12.34);
  });

  it("throws on divide by zero instead of yielding Infinity", () => {
    const ten = new NumberValueObject(10);
    expect(() => ten.divide(NumberValueObject.zero())).toThrow();
  });

  it("throws on 0 / 0 instead of yielding NaN", () => {
    expect(() =>
      NumberValueObject.zero().divide(NumberValueObject.zero())
    ).toThrow();
  });

  it("propagates the guard through a non-finite arithmetic result", () => {
    const big = new NumberValueObject(Number.MAX_VALUE);
    expect(() => big.times(new NumberValueObject(Number.MAX_VALUE))).toThrow();
  });
});

describe("PriceValueObject non-finite guards", () => {
  it("throws on divide by zero", () => {
    const price = new PriceValueObject(100, { decimals: 2 });
    expect(() => price.divide(PriceValueObject.zero())).toThrow();
  });

  it("rejects a non-finite construction", () => {
    expect(() => new PriceValueObject(Infinity)).toThrow();
  });
});
