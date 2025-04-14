import { InvalidEmailAddressError } from "./errors/InvalidEmailAddressError";
import { StringValueObject } from "./StringValueObject";

export class EmailValueObject extends StringValueObject {
  private _emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  validate(): Error | void {
    if (!this._emailRegex.test(String(this.value).toLowerCase()))
      return new InvalidEmailAddressError(this.value);
  }
}
