import { IValidatable } from "../ValueObject/IValidatable";

export class NumberValueObjectValidator implements IValidatable<number> {
  validate(val: number): Error | false | void {
    if (typeof val !== "number") {
      return false;
    }
  }
}
