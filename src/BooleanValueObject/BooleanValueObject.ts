import { ValueObject } from "../ValueObject/ValueObject";
import { BooleanValueObjectValidator } from "./BooleanValueObjectValidator";

export class BooleanValueObject<T extends any> extends ValueObject<boolean> {
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
}
