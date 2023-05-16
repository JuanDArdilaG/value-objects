import moment from "moment-timezone";
import { ValueObject } from "../ValueObject/ValueObject";
import { DateValueObjectValidator } from "./DateValueObjectValidator";
import { DateValueObjectOperator } from "./DateValueObjectOperator";
import { DateValueObjectTyper } from "./DateValueObjectTyper";

export class DateValueObject extends ValueObject<Date> {
  constructor(value: Date | string | number) {
    super(
      new DateValueObjectOperator(),
      new DateValueObjectTyper(),
      new DateValueObjectValidator(),
      new Date(value)
    );
  }

  empty(): DateValueObject {
    return new DateValueObject(new Date());
  }

  static now() {
    const now = new Date(moment().tz("America/Bogota").format());
    return new DateValueObject(now);
  }
}
