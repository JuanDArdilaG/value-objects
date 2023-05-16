import { ITypable } from "../ValueObject/ITypable";
import { DateValueObject } from "./DateValueObject";

export class DateValueObjectTyper implements ITypable<Date> {
  toType(val: DateValueObject): Date {
    return val.value;
  }

  fromType(val: Date): DateValueObject {
    return new DateValueObject(val);
  }
}
