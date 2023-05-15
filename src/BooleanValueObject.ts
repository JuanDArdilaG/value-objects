import { IValidatable } from "./IValidatable";
import { ValueObject } from "./ValueObject";

export class BooleanValueObjectValidator implements IValidatable<boolean> {
  validate(value: boolean): boolean {
    return typeof value === "boolean";
  }
}

export class BooleanValueObject<T extends any> extends ValueObject<boolean> {
  private _eval: T = Object.create(null);
  constructor(value: boolean) {
    super(new BooleanValueObjectValidator(), value);
  }

  add(other: BooleanValueObject<T>): BooleanValueObject<T> {
    return this.and(other);
  }

  static from<T extends any>(
    other: BooleanValueObject<any>
  ): BooleanValueObject<T> {
    return new BooleanValueObject<T>(other.value);
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

  toString(): string {
    return this.value ? "true" : "false";
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
