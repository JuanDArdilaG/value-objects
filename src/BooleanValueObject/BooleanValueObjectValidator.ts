import { IValidatable } from "../ValueObject/IValidatable";

export class BooleanValueObjectValidator implements IValidatable<boolean> {
  validate(val: boolean): false | void | Error {
    if (typeof val !== "boolean") {
      return false;
    }
  }
}
