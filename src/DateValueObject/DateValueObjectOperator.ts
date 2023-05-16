import { IOperable } from "../ValueObject/IOperable";
import { DateValueObject } from "./DateValueObject";

export class DateValueObjectOperator implements IOperable<Date> {
  add(a: DateValueObject, b: DateValueObject): DateValueObject {
    return new DateValueObject(a.value.getTime() + b.value.getTime());
  }
}
