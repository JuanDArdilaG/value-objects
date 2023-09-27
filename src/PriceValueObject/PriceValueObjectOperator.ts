import { NumberValueObjectOperator } from "../NumberValueObject";
import { PriceValueObject } from "./PriceValueObject";

export class PriceValueObjectOperator extends NumberValueObjectOperator {
  get value(): PriceValueObject {
    return new PriceValueObject(this._value.valueOf());
  }
}
