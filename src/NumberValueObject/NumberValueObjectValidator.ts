import { IValidator } from "../ValueObject/IValidator";

export class NumberValueObjectValidator implements IValidator<number> {
  validate(val: number): Error | false | void {
    if (typeof val !== "number") {
      return false;
    }
  }
}
