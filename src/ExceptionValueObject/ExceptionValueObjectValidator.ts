import { IValidator } from "../ValueObject";

export class ExceptionValueObjectValidator implements IValidator<Error> {
  validate(val: Error): Error | boolean {
    return val instanceof Error;
  }
}
