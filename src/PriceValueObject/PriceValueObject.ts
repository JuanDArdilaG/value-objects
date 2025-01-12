import { NumberValueObject } from "../NumberValueObject";
import { PriceValueObjectValidator } from "./PriceValueObjectValidator";

export type TPriceValueObject = {
  numPrice: number;
  strPrice: string;
};

export class PriceValueObject extends NumberValueObject {
  constructor(price: number) {
    super(price, {
      validator: new PriceValueObjectValidator(),
    });
  }

  static zero(): PriceValueObject {
    return new PriceValueObject(0);
  }

  negate(): PriceValueObject {
    return new PriceValueObject(-this._value);
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

  toString(sign: boolean = true, digits: number = 0): string {
    let val = Math.abs(this._value);
    let formatted = this._addCommas(
      `${digits >= 0 ? val.toFixed(digits) : val}`
    );
    if (sign) {
      formatted = `$${formatted}`;
      if (this._value < 0) formatted = `-${formatted}`;
    }
    return formatted;
  }

  static parseInput(
    inputElement: HTMLInputElement,
    cb?: (price: string) => void,
    hasSign = true,
    digitsCount = 0
  ) {
    inputElement.oninput = (e) => {
      e.preventDefault();
      let value = (e.currentTarget as HTMLInputElement).value;

      let strValue = PriceValueObject.fromString(value).toString(
        hasSign,
        digitsCount
      );

      const lastChar = value[value.length - 1];
      if (
        value.includes(".") &&
        digitsCount !== 0 &&
        [".", "0"].includes(lastChar)
      ) {
        strValue += lastChar;
      }

      inputElement.value = strValue;

      if (digitsCount > 0 && inputElement.selectionStart) {
        const cursorPosition = value.length - digitsCount - 1;
        inputElement.setSelectionRange(cursorPosition, cursorPosition);
      }

      inputElement.focus();

      if (cb) cb(inputElement.value);
    };
  }

  static fromString(strPrice: string): PriceValueObject {
    const price = parseFloat(strPrice.replace(/[$,]/g, ""));
    return Number.isNaN(price)
      ? PriceValueObject.zero()
      : new PriceValueObject(price);
  }

  toNumber(): number {
    return this.valueOf();
  }
}
