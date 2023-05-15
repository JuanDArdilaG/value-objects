import { EmailValueObject } from "../EmailValueObject";
import { PasswordValueObject } from "../PasswordValueObject";

export class InvalidPasswordException extends Error {
  constructor(email: EmailValueObject, pass: PasswordValueObject) {
    super(
      `Invalid password: ${pass.value.toString()} for email: ${email.toString()}`
    );
  }
}
