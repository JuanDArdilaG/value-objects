import { validate } from "uuid";
import { StringValueObjectValidator } from "../StringValueObject";

export class UUIDValueObjectValidator extends StringValueObjectValidator {
  constructor() {
    super({ minLength: 0, maxLength: 200 });
  }

  validate(value: string): false | void | Error {
    const strValidation = super.validate(value);
    if (strValidation instanceof Error || strValidation === false) {
      return strValidation;
    }
    if (!validate(value)) {
      return false;
    }
  }
}
