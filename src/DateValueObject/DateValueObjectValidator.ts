import { IValidator } from "../ValueObject/IValidator";

export class DateValueObjectValidator implements IValidator<Date> {
  validate(val: Date): Error | boolean {
    return val instanceof Date;
  }
}
