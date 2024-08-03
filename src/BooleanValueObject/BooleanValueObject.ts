import { ValueObject } from "../ValueObject/ValueObject";
import { BooleanValueObjectValidator } from "./BooleanValueObjectValidator";

export class BooleanValueObject extends ValueObject<boolean> {
  private _fn: () => any = () => {};
  constructor(value: boolean) {
    super(
      {
        validator: new BooleanValueObjectValidator(),
      },
      value
    );
  }

  static true(): BooleanValueObject {
    return new BooleanValueObject(true);
  }

  static false(): BooleanValueObject {
    return new BooleanValueObject(false);
  }

  or(other: BooleanValueObject): BooleanValueObject {
    return new BooleanValueObject(this.valueOf() || other.valueOf());
  }

  and(other: BooleanValueObject): BooleanValueObject {
    return new BooleanValueObject(this.valueOf() && other.valueOf());
  }

  not(): BooleanValueObject {
    return new BooleanValueObject(!this.valueOf());
  }

  toString(): string {
    return this.valueOf() ? "true" : "false";
  }

  then<T>(fn: () => T): BooleanValueObject {
    if (this.valueOf()) {
      this._fn = fn;
    }
    return this;
  }

  else<T>(fn: () => T): BooleanValueObject {
    if (!this.valueOf()) {
      this._fn = fn;
    }
    return this;
  }

  eval<T>(): T {
    return this._fn();
  }
}
