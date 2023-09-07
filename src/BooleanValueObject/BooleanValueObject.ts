import { ValueObject } from "../ValueObject/ValueObject";
import { BooleanValueObjectValidator } from "./BooleanValueObjectValidator";

export class BooleanValueObject<T extends any> extends ValueObject<boolean> {
  private _eval: T = Object.create(null);
  constructor(value: boolean) {
    super(
      {
        validator: new BooleanValueObjectValidator(),
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
    return new BooleanValueObject(this.valueOf() || other.valueOf());
  }

  and(other: BooleanValueObject<T>): BooleanValueObject<T> {
    return new BooleanValueObject(this.valueOf() && other.valueOf());
  }

  not(): BooleanValueObject<T> {
    return new BooleanValueObject(!this.valueOf());
  }

  toString(): string {
    return this.valueOf() ? "true" : "false";
  }

  then(fn: () => T): BooleanValueObject<T> {
    if (!this.valueOf()) {
      return this;
    }
    this._eval = fn();
    return this;
  }

  else(fn: () => T): BooleanValueObject<T> {
    if (this.valueOf()) {
      return this;
    }
    this._eval = fn();
    return this;
  }

  eval(): T {
    return this._eval;
  }
}
