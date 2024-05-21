import { IValidator } from "../ValueObject/IValidator";

export class NumberValueObjectValidator implements IValidator<number> {
  validate(val: number): Error | boolean {
    return typeof val === "number";
  }
}
