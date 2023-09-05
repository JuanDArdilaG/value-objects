import { EmailValueObject } from "../../EmailValueObject";
import { PasswordValueObject } from "../PasswordValueObject";

export class InvalidPasswordException extends Error {
  constructor(email: EmailValueObject, pass: PasswordValueObject) {
    super(
      `Invalid password: ${pass
        .valueOf()
        .toString()} for email: ${email.toString()}`
    );
  }
}
