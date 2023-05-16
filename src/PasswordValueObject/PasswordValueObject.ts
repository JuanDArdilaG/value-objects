import { StringValueObject } from "../StringValueObject/StringValueObject";
import { PasswordValueObjectOperator } from "./PasswordValueObjectOperator";
import { PasswordValueObjectValidator } from "./PasswordValueObjectValidator";

export class PasswordValueObject extends StringValueObject {
  constructor(pass: string, encrypted: boolean) {
    super(pass, {
      operable: new PasswordValueObjectOperator(),
      validatable: new PasswordValueObjectValidator(encrypted),
    });
  }

  static raw(pass: string): PasswordValueObject {
    return new PasswordValueObject(pass, false);
  }
}
