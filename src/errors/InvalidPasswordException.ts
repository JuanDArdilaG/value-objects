import { StringValueObject } from "../StringValueObject";

export class InvalidPasswordException extends Error {
  constructor(user: StringValueObject) {
    super(`Invalid password for user: ${user}`);
  }
}
