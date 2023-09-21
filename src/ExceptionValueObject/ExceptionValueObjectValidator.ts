import { IValidator } from "../ValueObject";

export class ExceptionValueObjectValidator implements IValidator<Error> {
  validate(val: Error): false | void | Error {
    if (val instanceof Error) {
      return val;
    }
    return false;
  }
}
