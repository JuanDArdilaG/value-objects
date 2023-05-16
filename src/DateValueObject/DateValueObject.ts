import moment from "moment-timezone";
import { ValueObject } from "../ValueObject/ValueObject";
import { DateValueObjectValidator } from "./DateValueObjectValidator";
import { DateValueObjectOperator } from "./DateValueObjectOperator";

export class DateValueObject extends ValueObject<Date> {
  constructor(value: Date | string | number) {
    super(
      {
        operable: new DateValueObjectOperator(),
        validatable: new DateValueObjectValidator(),
        isPII: false,
      },
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
