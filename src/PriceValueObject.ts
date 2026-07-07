import { IValueObject } from "./IValueObject";
import { NumberValueObject } from "./NumberValueObject";
import { InvalidArgumentError } from "./errors";

export const PRICE_DECIMAL_BASE = 10;

export function roundToDecimals(value: number, decimals: number): number {
  const factor = PRICE_DECIMAL_BASE ** decimals;
  const rounded =
    (Math.sign(value) * Math.round(Math.abs(value) * factor)) / factor;
  return rounded === 0 ? 0 : rounded;
}

export type PriceValueObjectConfig = {
  withSign?: boolean;
  withZeros?: boolean;
  decimals?: number;
};

export const PriceValueObjectDefaultConfig: PriceValueObjectConfig = {
  withSign: true,
};

export class PriceValueObject extends NumberValueObject {
  readonly price: number;
  private readonly _config: PriceValueObjectConfig;

  constructor(
    price: number,
    config: PriceValueObjectConfig = PriceValueObjectDefaultConfig
  ) {
    const rounded =
      config.decimals != null && config.decimals >= 0
        ? roundToDecimals(price, config.decimals)
        : price;
    super(rounded);
    this.price = rounded;
    this._config = config;
  }

  static zero(): PriceValueObject {
    return new PriceValueObject(0);
  }

  plus(o: IValueObject<number>): PriceValueObject {
    return new PriceValueObject(this.value + o.value, this._config);
  }

  subtract(o: IValueObject<number>): PriceValueObject {
    return new PriceValueObject(this.value - o.value, this._config);
  }

  times(o: IValueObject<number>): PriceValueObject {
    return new PriceValueObject(this.value * o.value, this._config);
  }

  divide(o: IValueObject<number>): PriceValueObject {
    if (o.value === 0)
      throw new InvalidArgumentError("PriceValueObject.divide", o.value);
    return new PriceValueObject(this.value / o.value, this._config);
  }

  abs(): PriceValueObject {
    return new PriceValueObject(Math.abs(this.value), this._config);
  }

  negate(): PriceValueObject {
    return new PriceValueObject(-this.value, this._config);
  }

  fixed(n: number): PriceValueObject {
    return new PriceValueObject(roundToDecimals(this.value, n), this._config);
  }

  toString(): string {
    let val = Math.abs(this.value);
    let formatted = this._addCommas(
      `${
        this._config.decimals && this._config.decimals < 0
          ? val
          : val.toFixed(this._config.decimals ?? 0)
      }`
    );
    if (this._config.withSign) {
      formatted = `$${formatted}`;
      if (this.value < 0) formatted = `-${formatted}`;
    }
    return formatted;
  }

  _addCommas(input: string) {
    let inputParts = input.split(".");
    let integerPart = inputParts[0];
    let decimalPart =
      inputParts.length > 1 &&
      (this._config.withZeros || Number.parseInt(inputParts[1]) > 0)
        ? "." + inputParts[1]
        : "";
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(integerPart)) {
      integerPart = integerPart.replace(rgx, "$1,$2");
    }
    return integerPart + decimalPart;
  }

  static parseInput(
    inputElement: HTMLInputElement,
    cb?: (price: string) => void,
    config: PriceValueObjectConfig = PriceValueObjectDefaultConfig
  ) {
    inputElement.oninput = (e) => {
      e.preventDefault();
      let value = (e.currentTarget as HTMLInputElement).value;

      let strValue = PriceValueObject.fromString(value, config).toString();

      const lastChar = value[value.length - 1];
      if (
        value.includes(".") &&
        config.decimals !== 0 &&
        [".", "0"].includes(lastChar)
      ) {
        strValue += lastChar;
      }

      inputElement.value = strValue;

      if (config.decimals) {
        if (config.decimals > 0 && inputElement.selectionStart) {
          const cursorPosition = value.length - config.decimals - 1;
          inputElement.setSelectionRange(cursorPosition, cursorPosition);
        }
      }

      inputElement.focus();

      if (cb) cb(inputElement.value);
    };
  }

  static fromString(
    strPrice: string,
    config: PriceValueObjectConfig = PriceValueObjectDefaultConfig
  ): PriceValueObject {
    const price = parseFloat(strPrice.replace(/[$,]/g, ""));
    return Number.isNaN(price)
      ? PriceValueObject.zero()
      : new PriceValueObject(price, config);
  }

  toNumber(): number {
    return this.valueOf();
  }
}
