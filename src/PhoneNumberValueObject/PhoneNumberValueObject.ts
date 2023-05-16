import { StringValueObject } from "../StringValueObject/StringValueObject";
import { PhoneNumberValueObjectTyper } from "./PhoneNumberValueObjectTyper";
import { PhoneNumberValueObjectValidator } from "./PhoneNumberValueObjectValidator";

export type PhoneNumberValueObjectOptions = { required: boolean };

export class PhoneNumberValueObject extends StringValueObject {
  constructor(value: string, _options?: PhoneNumberValueObjectOptions) {
    super(
      value,
      undefined,
      new PhoneNumberValueObjectTyper(),
      new PhoneNumberValueObjectValidator(_options)
    );
  }
}
