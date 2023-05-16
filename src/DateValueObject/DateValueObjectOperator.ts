import { IOperable } from "../ValueObject/IOperable";
import { DateValueObject } from "./DateValueObject";

export class DateValueObjectOperator implements IOperable<Date> {
  // add(a: IValueObject<Date>, b: IValueObject<Date>): IValueObject<Date> {
  //   return new DateValueObject(a.value.getTime() + b.value.getTime());
  // }
  add(a: DateValueObject, b: DateValueObject): DateValueObject {
    return new DateValueObject(a.value.getTime() + b.value.getTime());
  }
}
