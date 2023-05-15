import { StringValueObject } from "./StringValueObject";

export class PhoneNumberValueObjectValidator {
  constructor(private _options?: { required: boolean }) {}
  validate(value: string): boolean {
    const emptyValue = !value;
    const checkValue = RegExp(/^\+?[0-9]{3,13}$/).test(value);
    if (!emptyValue) {
      return checkValue;
    } else {
      return !this._options?.required;
    }
  }
}

export type PhoneNumberValueObjectOptions = { required: boolean };
export class PhoneNumberValueObject extends StringValueObject {
  constructor(value: string, _options?: PhoneNumberValueObjectOptions) {
    super(
      value,
      { minLength: 3, maxLength: 20 },
      new PhoneNumberValueObjectValidator(_options)
    );
  }
}
