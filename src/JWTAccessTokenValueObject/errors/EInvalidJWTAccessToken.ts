import { ExceptionValueObject } from "../../ExceptionValueObject/ExceptionValueObject";

export class EInvalidJWTAccessToken extends ExceptionValueObject {
  constructor(message: string) {
    super(new Error(message));
    this._value.name = "EInvalidJWTAccessToken";
  }
}
