import { validate } from "uuid";
import { StringValueObjectValidator } from "../StringValueObject";

export class UUIDValueObjectValidator extends StringValueObjectValidator {
  constructor() {
    super({ minLength: 0, maxLength: 200 });
  }

  validate(value: string): Error | boolean {
    const strValidation = super.validate(value);
    if (strValidation instanceof Error || !strValidation) {
      return strValidation;
    }

    return validate(value);
  }
}
