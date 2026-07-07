import { describe, it, expect } from "vitest";
import { unwrap } from "../src/unwrap";
import { StringValueObject } from "../src/StringValueObject";
import { NumberValueObject } from "../src/NumberValueObject";
import { PriceValueObject } from "../src/PriceValueObject";

describe("unwrap", () => {
  it("returns a primitive unchanged", () => {
    expect(unwrap("hello")).toBe("hello");
    expect(unwrap(42)).toBe(42);
    expect(unwrap(null)).toBe(null);
    expect(unwrap(undefined)).toBe(undefined);
  });

  it("reads .value off a value object", () => {
    expect(unwrap(new StringValueObject("abc"))).toBe("abc");
    expect(unwrap(new NumberValueObject(7))).toBe(7);
    expect(unwrap(new PriceValueObject(5, { decimals: 2 }))).toBe(5);
  });

  it("recursively unwraps nested value objects", () => {
    const nested = { value: new StringValueObject("deep") };
    expect(unwrap(nested)).toBe("deep");
  });
});
