import { InvalidArgumentError } from "./errors";
import { StringValueObject } from "./StringValueObject";

export type PhoneNumberValueObjectConfig = { required: boolean };

export class PhoneNumberValueObject extends StringValueObject {
  constructor(
    value: string,
    private readonly _phoneConfig?: PhoneNumberValueObjectConfig
  ) {
    super(value);
  }

  validate(): Error | void {
    const isEmptyValue = !this.value;
    const isValidPhoneNumber = RegExp(/^\+?\d{3,20}$/).test(this.value);

    if (isEmptyValue && this._phoneConfig?.required)
      return new Error("phone number is required");

    if (!isEmptyValue && !isValidPhoneNumber)
      return new InvalidArgumentError("PhoneNumberValueObject", this.value);
  }
}
