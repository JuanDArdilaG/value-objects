import { describe, it, expect } from "vitest";
import { PriceValueObject } from "../src/PriceValueObject";

const cents = (n: number) => new PriceValueObject(n, { decimals: 2 });

describe("PriceValueObject deterministic rounding (decimals >= 0)", () => {
  it("rounds float noise to the configured decimals on construction", () => {
    expect(cents(0.1 + 0.2).value).toBe(0.3);
    expect(cents(1.234).value).toBe(1.23);
    expect(cents(1.235).value).toBe(1.24);
  });

  it("makes money equality exact after arithmetic (no epsilon needed)", () => {
    const sum = cents(0.1).plus(cents(0.2));
    expect(sum.value).toBe(0.3);
    expect(sum.equalTo(cents(0.3))).toBe(true);
  });

  it("keeps chained arithmetic reconciled to cents (no accumulation drift)", () => {
    let total = cents(0);
    for (let i = 0; i < 10; i++) total = total.plus(cents(0.1));
    expect(total.value).toBe(1);
  });

  it("re-rounds through times/divide", () => {
    expect(cents(10).divide(cents(3)).value).toBe(3.33);
    expect(cents(0.1).times(cents(3)).value).toBe(0.3);
  });

  it("fixed() rounds correctly instead of via toFixed float artifacts", () => {
    expect(cents(1.239).fixed(2).value).toBe(1.24);
  });

  it("propagates the left operand's config through arithmetic", () => {
    const unrounded = PriceValueObject.zero().plus(cents(0.1).plus(cents(0.2)));
    expect(unrounded.value).toBe(0.3);
    const seeded = cents(0).plus(cents(0.1)).plus(cents(0.2));
    expect(seeded.value).toBe(0.3);
  });

  it("does NOT round when decimals is unset or negative (unlimited precision preserved)", () => {
    expect(new PriceValueObject(1234.0123456789, { decimals: -1 }).value).toBe(
      1234.0123456789
    );
    expect(new PriceValueObject(1.2345, { withSign: true }).value).toBe(1.2345);
  });
});
