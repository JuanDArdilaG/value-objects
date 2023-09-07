import { IValidator } from "../ValueObject/IValidator";

export class BooleanValueObjectValidator implements IValidator<boolean> {
  validate(val: boolean): false | void | Error {
    if (typeof val !== "boolean") {
      return false;
    }
  }
}
