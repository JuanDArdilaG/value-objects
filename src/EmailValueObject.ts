import { IValidatable } from "./IValidatable";
import {
  StringLengthOptionsDefault,
  StringValueObject,
} from "./StringValueObject";

export class EmailValueObjectValidator implements IValidatable<string> {
  validate(value: string): boolean {
    let regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(value).toLowerCase());
  }
}

export class EmailValueObject extends StringValueObject {
  constructor(email: string) {
    super(email, StringLengthOptionsDefault, new EmailValueObjectValidator());
  }
}
