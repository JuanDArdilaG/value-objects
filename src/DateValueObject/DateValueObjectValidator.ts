import { IValidatable } from "../ValueObject/IValidatable";

export class DateValueObjectValidator implements IValidatable<Date> {
  validate(val: Date): false | void | Error {
    if (!(val instanceof Date)) {
      return false;
    }
  }
}
