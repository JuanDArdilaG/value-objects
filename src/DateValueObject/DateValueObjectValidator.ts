import { IValidator } from "../ValueObject/IValidator";

export class DateValueObjectValidator implements IValidator<Date> {
  validate(val: Date): false | void | Error {
    if (!(val instanceof Date)) {
      return false;
    }
  }
}
