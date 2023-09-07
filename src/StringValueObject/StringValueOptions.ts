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

export const StringValueDefaultOptions = (value: string) => ({
  operable: new StringValueObjectOperator(value),
  validatable: new StringValueObjectValidator(StringLengthOptionsDefault),
});
