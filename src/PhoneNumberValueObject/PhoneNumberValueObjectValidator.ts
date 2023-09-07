import { IValidator } from "../ValueObject";

export class PhoneNumberValueObjectValidator implements IValidator<string> {
  constructor(private _options?: { required: boolean }) {}

  validate(value: string): false | void | Error {
    const emptyValue = !value;
    const checkValue = RegExp(/^\+?[0-9]{3,20}$/).test(value);
    if (!emptyValue) {
      if (checkValue) {
        return;
      } else {
        return new Error("invalid phone number");
      }
    } else {
      if (this._options?.required) {
        return new Error("phone number is required");
      } else {
        return;
      }
    }
  }
}
