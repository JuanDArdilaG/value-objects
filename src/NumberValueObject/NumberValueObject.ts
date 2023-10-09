import { ValueObject, ValueObjectOptions } from "../ValueObject/ValueObject";
import { NumberValueObjectValidator } from "./NumberValueObjectValidator";

export class NumberValueObject extends ValueObject<number> {
  constructor(_value: number, _options?: Partial<ValueObjectOptions<number>>) {
    super(
      {
        validator: _options?.validator ?? new NumberValueObjectValidator(),
        pii: _options?.pii,
      },
      _value
    );
  }

  static empty(): NumberValueObject {
    return new NumberValueObject(0);
  }

  static zero(): NumberValueObject {
    return new NumberValueObject(0);
  }

  negate(): NumberValueObject {
    return new NumberValueObject(-this._value);
  }

  isPositive(): boolean {
    return this._value > 0;
  }

  isNegative(): boolean {
    return this._value < 0;
  }

  isZero(): boolean {
    return this._value === 0;
  }
}
