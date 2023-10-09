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

  toStrPrice(sign: boolean = true, digits: number = 0): string {
    return PriceValueObject._priceToString(this._value, digits, sign);
  }

  static parseInput(
    inputElement: HTMLInputElement | null,
    sign = true,
    digits = 0
  ) {
    if (!inputElement) {
      return;
    }
    inputElement.oninput = (e) => {
      e.preventDefault();
      const parsedValue = PriceValueObject.fromString(
        (e.currentTarget as HTMLInputElement).value
      );
      inputElement.value = parsedValue.toStrPrice(sign, digits);
      if (digits && inputElement.selectionStart) {
        inputElement.setSelectionRange(
          (e.currentTarget as HTMLInputElement).value.length - digits - 1,
          (e.currentTarget as HTMLInputElement).value.length - digits - 1
        );
      }

      inputElement.focus();
    };
  }

  static fromString(strPrice: string): PriceValueObject {
    return new PriceValueObject(PriceValueObject._stringToPrice(strPrice));
  }

  private static _priceToString(
    price: number,
    digits: number,
    sign: boolean = false
  ) {
    return this._formatCurrency(price, digits, sign);
  }

  private static _stringToPrice(strPrice: string) {
    return this._unformatCurrency(strPrice);
  }

  private static _formatCurrency(
    num: number,
    fractionDigits: number,
    sign: boolean = false
  ) {
    const addCommas = (nStr: string) => {
      nStr += "";
      let x = nStr.split(".");
      let x1 = x[0];
      let x2 = x.length > 1 ? "." + x[1] : "";
      let rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, "$1,$2");
      }
      return x1 + x2;
    };
    let formatted = `${num.toFixed(fractionDigits)}`;
    formatted = addCommas(formatted);
    if (sign) {
      if (num < 0) {
        formatted = formatted.slice(1, formatted.length);
        formatted = `-$${formatted.replaceAll("$", "").trim()}`;
      } else {
        formatted = `$${formatted.replaceAll("$", "").trim()}`;
      }
    }
    return formatted;
  }

  private static _unformatCurrency(strCurrency: string) {
    const price = parseFloat(
      strCurrency.replaceAll("$", "").replaceAll(",", "")
    );
    return Number.isNaN(price) ? 0 : price;
  }
}
