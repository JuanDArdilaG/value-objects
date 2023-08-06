import { StringValueObject } from "src/StringValueObject";
import { ValueObject } from "../ValueObject/ValueObject";
import { BooleanValueObjectOperator } from "./BooleanValueObjectOperator";
import { BooleanValueObjectValidator } from "./BooleanValueObjectValidator";

export class BooleanValueObject<T extends any> extends ValueObject<boolean> {
  private _eval: T = Object.create(null);
  constructor(value: boolean) {
    super(
      {
        operable: new BooleanValueObjectOperator<T>(),
        validatable: new BooleanValueObjectValidator(),
      },
      value
    );
  }

  static true<T extends any>(): BooleanValueObject<T> {
    return new BooleanValueObject<T>(true);
  }

  static false<T extends any>(): BooleanValueObject<T> {
    return new BooleanValueObject<T>(false);
  }

  or(other: BooleanValueObject<T>): BooleanValueObject<T> {
    return new BooleanValueObject(this.value || other.value);
  }

  and(other: BooleanValueObject<T>): BooleanValueObject<T> {
    return new BooleanValueObject(this.value && other.value);
  }

  not(): BooleanValueObject<T> {
    return new BooleanValueObject(!this.value);
  }

  toString(): StringValueObject {
    return this.value
      ? new StringValueObject("true")
      : new StringValueObject("false");
  }

  then(fn: () => T): BooleanValueObject<T> {
    if (!this.value) {
      return this;
    }
    this._eval = fn();
    return this;
  }

  else(fn: () => T): BooleanValueObject<T> {
    if (this.value) {
      return this;
    }
    this._eval = fn();
    return this;
  }

  eval(): T {
    return this._eval;
  }
}
