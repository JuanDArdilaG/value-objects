import { ValueObject, ValueObjectOptions } from "../ValueObject/ValueObject";
import { NumberValueObjectOperator } from "./NumberValueObjectOperator";
import { NumberValueObjectValidator } from "./NumberValueObjectValidator";

export class NumberValueObject extends ValueObject<number> {
  constructor(_value: number, _options?: Partial<ValueObjectOptions<number>>) {
    super(
      {
        operable: _options?.operable ?? new NumberValueObjectOperator(_value),
        validatable: _options?.validatable ?? new NumberValueObjectValidator(),
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
}
