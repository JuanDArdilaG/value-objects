import { IValidator } from "../ValueObject/IValidator";

export class BooleanValueObjectValidator implements IValidator<boolean> {
  validate(val: boolean): Error | boolean {
    return val === true || val === false;
  }
}
