import { StringValueObject } from "../StringValueObject/StringValueObject";
import { PasswordValueObjectValidator } from "./PasswordValueObjectValidator";

export class PasswordValueObject extends StringValueObject {
  constructor(pass: string, encrypted: boolean) {
    super(pass, {
      validatable: new PasswordValueObjectValidator(encrypted),
    });
  }

  static raw(pass: string): PasswordValueObject {
    return new PasswordValueObject(pass, false);
  }
}
