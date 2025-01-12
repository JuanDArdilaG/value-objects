import { PriceValueObject } from "../../src/PriceValueObject";

describe("PriceValueObject creation", () => {
  it("PriceValueObject.fromString should create a PriceVO from a string correctly", () => {
    const inputPriceString = "$1,234.5";

    const priceValue = PriceValueObject.fromString(inputPriceString).valueOf();

    expect(priceValue).toBe(1234.5);
  });
});

describe("PriceValueObject.toString(...)", () => {
  it("PriceValueObject should format to default (with sign, 0 digits) string", () => {
    const inputPriceString = 1234.5;

    const priceValue = new PriceValueObject(inputPriceString).toString();

    expect(priceValue).toBe("$1,235");
  });

  it("PriceValueObject should format to (with sign, 2 digits) string", () => {
    const inputPriceString = 1234.5;

    const priceValue = new PriceValueObject(inputPriceString).toString(true, 2);

    expect(priceValue).toBe("$1,234.50");
  });

  it("PriceValueObject should format to (with sign, unlimited digits) string", () => {
    const inputPriceString = 1234.0123456789;

    const priceValue = new PriceValueObject(inputPriceString).toString(
      true,
      -1
    );

    expect(priceValue).toBe("$1,234.0123456789");
  });

  it("PriceValueObject should format to (without sign, 1 digits) string", () => {
    const inputPriceString = 1234.5;

    const priceValue = new PriceValueObject(inputPriceString).toString(
      false,
      1
    );

    expect(priceValue).toBe("1,234.5");
  });

  it("PriceValueObject should format a negative number", () => {
    const inputPriceString = -1234.5;

    const priceValue = new PriceValueObject(inputPriceString).toString();

    expect(priceValue).toBe("-$1,235");
  });
});
