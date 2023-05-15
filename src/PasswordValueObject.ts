import { StringValueObject } from "./StringValueObject";

export class PasswordValueObject extends StringValueObject {
  static raw(pass: string): PasswordValueObject {
    if (pass.length < 5 || pass.length > 50) {
      throw new Error("Password length must be between 5 and 50 characters");
    }
    return new PasswordValueObject(pass);
  }
}
