import { ITypable } from "../ValueObject/ITypable";
import { IValueObject } from "../ValueObject/IValueObject";
import { DateValueObject } from "./DateValueObject";

export class DateValueObjectTyper implements ITypable<Date> {
  toType(val: IValueObject<Date>): Date {
    return val.value;
  }

  fromType(val: Date): IValueObject<Date> {
    return new DateValueObject(val);
  }
}
