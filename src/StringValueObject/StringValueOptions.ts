import { ValueObjectOptions } from "../ValueObject";
import { StringValueObjectOperator } from "./StringValueObjectOperator";
import { StringValueObjectValidator } from "./StringValueObjectValidator";

export type StringLengthOptions = {
  minLength: number;
  maxLength: number;
};

export const StringLengthOptionsDefault: StringLengthOptions = {
  minLength: 0,
  maxLength: 100000,
};

export const StringValueDefaultOptions: ValueObjectOptions<string> = {
  operable: new StringValueObjectOperator("", ""),
  validatable: new StringValueObjectValidator(StringLengthOptionsDefault),
};
