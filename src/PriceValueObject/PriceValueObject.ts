import { NumberValueObject } from "../NumberValueObject";
import { PriceValueObjectValidator } from "./PriceValueObjectValidator";

export type TPriceValueObject = {
  numPrice: number;
  strPrice: string;
};

export class PriceValueObject extends NumberValueObject {
  constructor(readonly price: number, readonly strPrice: string) {
    super(price, {
      validator: new PriceValueObjectValidator(),
    });
  }

  static parseInput(
    inputElement: HTMLInputElement | null,
    sign = false,
    digits = 2
  ) {
    if (!inputElement) {
      return;
    }
    inputElement.oninput = (e) => {
      e.preventDefault();
      const parsedValue = PriceValueObject.fromString(
        (e.currentTarget as HTMLInputElement).value,
        sign,
        digits
      );
      inputElement.value = parsedValue.strPrice;
      if (digits && inputElement.selectionStart) {
        inputElement.setSelectionRange(
          (e.currentTarget as HTMLInputElement).value.length - digits - 1,
          (e.currentTarget as HTMLInputElement).value.length - digits - 1
        );
      }

      inputElement.focus();
    };
  }

  static toString(price: number, sign: boolean = false, digits: number = 2) {
    if (!price) {
      price = 0;
    }
    return new PriceValueObject(
      price,
      this._priceToString(price, digits, sign)
    );
  }

  static fromString(
    strPrice: string,
    sign: boolean = false,
    digits: number = 2
  ) {
    const price = PriceValueObject._stringToPrice(strPrice);
    const str = PriceValueObject._priceToString(price, digits, sign);
    return new PriceValueObject(price, str);
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
