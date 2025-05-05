import { InvalidArgumentError } from "./errors";
import { IValueObject } from "./IValueObject";

export class DateValueObject extends Date implements IValueObject<Date> {
  constructor(readonly value: Date) {
    super(value);
  }

  validate(): Error | void {
    if (!(this.value instanceof Date))
      return new InvalidArgumentError("DateValueObject", this.value);
  }

  static createNowDate() {
    return new DateValueObject(new Date());
  }

  updateTime(
    hours: number,
    min?: number,
    sec?: number,
    ms?: number
  ): DateValueObject {
    return new DateValueObject(
      new Date(
        this.value.getFullYear(),
        this.value.getMonth(),
        this.value.getDate(),
        hours,
        min,
        sec,
        ms
      )
    );
  }

  updateDay(day: number): DateValueObject {
    return new DateValueObject(new Date(this.value.setDate(day)));
  }

  updateMonth(month: number): DateValueObject {
    return new DateValueObject(new Date(this.value.setMonth(month)));
  }

  compareTo(o: IValueObject<Date>): number {
    return this.value.getTime() - o.value.getTime();
  }

  equalTo(o: IValueObject<Date>): boolean {
    return this.value.getTime() === o.value.getTime();
  }

  isLessOrEqualThan(o: IValueObject<Date>): boolean {
    return this.value.getTime() <= o.value.getTime();
  }

  isGreaterOrEqualThan(o: IValueObject<Date>): boolean {
    return this.value.getTime() >= o.value.getTime();
  }

  addDays(days: number): DateValueObject {
    return new DateValueObject(
      new Date(this.value.getTime() + days * 24 * 60 * 60 * 1000)
    );
  }

  daysDiff(o: IValueObject<Date>): number {
    const thisMs = this.value.getTime();
    const oMs = o.value.getTime();

    const differenceMs = thisMs - oMs;

    const daysDifference = differenceMs / (1000 * 60 * 60 * 24);

    return Math.trunc(daysDifference);
  }

  getMonthNameAbbreviation(): string {
    return this.value.toLocaleString("default", { month: "short" });
  }
}
