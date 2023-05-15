import moment from "moment-timezone";
import { ValueObject } from "./ValueObject";
import { IValidatable } from "./IValidatable";

export class DateValueObjectValidator implements IValidatable<Date> {
  validate(value: Date): boolean {
    return value instanceof Date;
  }
}

export class DateValueObject extends ValueObject<Date> {
  constructor(value: Date | string | number) {
    super(new DateValueObjectValidator(), new Date(value));
  }

  empty(): DateValueObject {
    return new DateValueObject(new Date());
  }

  static now() {
    const now = new Date(moment().tz("America/Bogota").format());
    return new DateValueObject(now);
  }

  add(o: DateValueObject): DateValueObject {
    return new DateValueObject(this.value.getTime() + o.value.getTime());
  }
}
