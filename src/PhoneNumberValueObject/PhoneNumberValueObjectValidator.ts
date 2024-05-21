import { IValidator } from "../ValueObject";

export class PhoneNumberValueObjectValidator implements IValidator<string> {
  constructor(private _options?: { required: boolean }) {}

  validate(value: string): Error | boolean {
    const isEmptyValue = !value;
    const isValidPhoneNumber = RegExp(/^\+?[0-9]{3,20}$/).test(value);

    if (isEmptyValue && this._options?.required)
      return new Error("phone number is required");

    return !isEmptyValue && !isValidPhoneNumber
      ? new Error("invalid phone number")
      : true;
  }
}
