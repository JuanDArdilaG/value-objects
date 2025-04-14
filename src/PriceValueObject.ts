import { IValueObject } from "./IValueObject";
import { NumberValueObject } from "./NumberValueObject";

export type PriceValueObjectConfig = {
  withSign: boolean;
  decimals: number;
};

export const PriceValueObjectDefaultConfig: PriceValueObjectConfig = {
  withSign: true,
  decimals: 0,
};

export class PriceValueObject extends NumberValueObject {
  constructor(
    readonly price: number,
    private readonly _config: PriceValueObjectConfig = PriceValueObjectDefaultConfig
  ) {
    super(price);
  }

  static zero(): PriceValueObject {
    return new PriceValueObject(0);
  }

  plus(o: IValueObject<number>): PriceValueObject {
    return new PriceValueObject(this.value + o.value);
  }

  sustract(o: IValueObject<number>): PriceValueObject {
    return new PriceValueObject(this.value - o.value);
  }

  times(o: IValueObject<number>): PriceValueObject {
    return new PriceValueObject(this.value * o.value);
  }

  divide(o: IValueObject<number>): PriceValueObject {
    return new PriceValueObject(this.value / o.value);
  }

  abs(): PriceValueObject {
    return new PriceValueObject(Math.abs(this.value));
  }

  negate(): PriceValueObject {
    return new PriceValueObject(-this.value);
  }

  fixed(n: number): PriceValueObject {
    return new PriceValueObject(parseFloat(this.value.toFixed(n)));
  }

  toString(): string {
    let val = Math.abs(this.value);
    let formatted = this._addCommas(
      `${this._config.decimals >= 0 ? val.toFixed(this._config.decimals) : val}`
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
    let decimalPart = inputParts.length > 1 ? "." + inputParts[1] : "";
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

      if (config.decimals > 0 && inputElement.selectionStart) {
        const cursorPosition = value.length - config.decimals - 1;
        inputElement.setSelectionRange(cursorPosition, cursorPosition);
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
