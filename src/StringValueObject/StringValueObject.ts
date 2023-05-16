import { IValidatable } from "../ValueObject/IValidatable";
import { ValueObject } from "../ValueObject/ValueObject";
import { StringValueObjectOperator } from "./StringValueObjectOperator";
import { StringValueObjectTyper } from "./StringValueObjectTyper";
import { StringValueObjectValidator } from "./StringValueObjectValidator";

export class StringValueObject extends ValueObject<string> {
  constructor(
    _value: string,
    _operator?: StringValueObjectOperator,
    _typer?: StringValueObjectTyper,
    _validator?: IValidatable<string>
  ) {
    super(
      _operator || new StringValueObjectOperator(),
      _typer || new StringValueObjectTyper(),
      _validator || new StringValueObjectValidator(StringLengthOptionsDefault),
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
