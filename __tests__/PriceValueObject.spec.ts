import { describe, it, expect } from "vitest";
import { PriceValueObject } from "../src/PriceValueObject";

describe("PriceValueObject creation", () => {
  it("PriceValueObject.fromString should create a PriceVO from a string correctly", () => {
    const inputPriceString = "$1,234.5";

    const priceValue = PriceValueObject.fromString(inputPriceString).value;

    expect(priceValue).toBe(1234.5);
  });
});

describe("PriceValueObject.toString(...)", () => {
  it("PriceValueObject should format to default (with sign, 0 digits) string", () => {
    const inputPriceString = 1234.5;

    const priceValue = new PriceValueObject(inputPriceString, {
      withSign: true,
      decimals: 0,
    }).toString();

    expect(priceValue).toBe("$1,235");
  });

  it("PriceValueObject should format to (with sign, 2 digits) string", () => {
    const inputPriceString = 1234.5;

    const priceValue = new PriceValueObject(inputPriceString, {
      withSign: true,
      decimals: 2,
    }).toString();

    expect(priceValue).toBe("$1,234.50");
  });

  it("PriceValueObject should format to (with sign, unlimited digits) string", () => {
    const inputPriceString = 1234.0123456789;

    const priceValue = new PriceValueObject(inputPriceString, {
      withSign: true,
      decimals: -1,
    }).toString();

    expect(priceValue).toBe("$1,234.0123456789");
  });

  it("PriceValueObject should format to (without sign, 1 digits) string", () => {
    const inputPriceString = 1234.5;

    const priceValue = new PriceValueObject(inputPriceString, {
      withSign: false,
      decimals: 1,
    }).toString();

    expect(priceValue).toBe("1,234.5");
  });

  it("PriceValueObject should format a negative number", () => {
    const inputPriceString = -1234.5;

    const priceValue = new PriceValueObject(inputPriceString).toString();

    expect(priceValue).toBe("-$1,235");
  });

  it("PriceValueObject should with multiple decimals", () => {
    const inputPriceString = 123.12345;

    const priceValue = new PriceValueObject(inputPriceString, {
      withSign: true,
      decimals: -1,
    }).toString();

    expect(priceValue).toBe("$123.12345");
  });
});
