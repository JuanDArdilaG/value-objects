import { StringValueObject } from "../StringValueObject/StringValueObject";
import { PhoneNumberValueObjectValidator } from "./PhoneNumberValueObjectValidator";

export type PhoneNumberValueObjectOptions = { required: boolean };

export class PhoneNumberValueObject extends StringValueObject {
  constructor(value: string, _options?: PhoneNumberValueObjectOptions) {
    super(value, {
      validatable: new PhoneNumberValueObjectValidator(_options),
    });
  }
}
