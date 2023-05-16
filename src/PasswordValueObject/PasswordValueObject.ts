import { StringValueObject } from "../StringValueObject/StringValueObject";
import { PasswordValueObjectOperator } from "./PasswordValueObjectOperator";
import { PasswordValueObjectTyper } from "./PasswordValueObjectTyper";
import { PasswordValueObjectValidator } from "./PasswordValueObjectValidator";

export class PasswordValueObject extends StringValueObject {
  constructor(pass: string, encrypted: boolean) {
    super(
      pass,
      new PasswordValueObjectOperator(),
      new PasswordValueObjectTyper(),
      new PasswordValueObjectValidator(encrypted)
    );
  }

  static raw(pass: string): PasswordValueObject {
    return new PasswordValueObject(pass, false);
  }
}
