import moment from "moment-timezone";
import { ValueObject } from "../ValueObject/ValueObject";
import { DateValueObjectValidator } from "./DateValueObjectValidator";

export class DateValueObject extends ValueObject<Date> {
  constructor(value: Date) {
    super(
      {
        validator: new DateValueObjectValidator(),
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
