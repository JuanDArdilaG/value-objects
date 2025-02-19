import {
  InvalidArgumentError,
  InvalidValueObjectValueError,
  IValidator,
} from "../ValueObject";
import { StringValueObjectOperator } from "./StringValueObjectOperator";
import { StringValueObjectValidator } from "./StringValueObjectValidator";

export class StringValueObject extends String {
  operations: StringValueObjectOperator;

  constructor(
    _value: string,
    private _validator: IValidator<string> = new StringValueObjectValidator()
  ) {
    super(_value);
    this.validate(_value);
    this.operations = new StringValueObjectOperator(_value);
  }

  validate(value: string): void {
    const validation = this._validator.validate(value);
    if (validation === true) return;
    if (!validation)
      throw new InvalidValueObjectValueError(
        this.constructor.name,
        "invalid value object"
      );
    if (validation instanceof Error) throw validation;
    throw new InvalidArgumentError(this.constructor.name, value);
  }

  static empty(): StringValueObject {
    return new StringValueObject("");
  }
}
