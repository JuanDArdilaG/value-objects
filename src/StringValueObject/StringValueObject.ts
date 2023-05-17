import { ValueObject, ValueObjectOptions } from "../ValueObject/ValueObject";
import { StringValueObjectOperator } from "./StringValueObjectOperator";

import { StringValueObjectValidator } from "./StringValueObjectValidator";

export class StringValueObject extends ValueObject<string> {
  constructor(_value: string, options?: Partial<ValueObjectOptions<string>>) {
    super(
      {
        operable:
          options?.operable ||
          new StringValueObjectOperator(
            options?.pii?.key || "",
            options?.pii?.iv || ""
          ),
        validatable:
          options?.validatable ||
          new StringValueObjectValidator(StringLengthOptionsDefault),
        pii: options?.pii,
      },
      _value
    );
  }

  static empty(): StringValueObject {
    return new StringValueObject("");
  }

  isEmpty(): boolean {
    return this._value == "";
  }

  is(value: string): boolean {
    return this.value === value;
  }
}

export const StringLengthOptionsDefault: StringLengthOptions = {
  minLength: 0,
  maxLength: 100000,
};

export type StringLengthOptions = {
  minLength: number;
  maxLength: number;
};
