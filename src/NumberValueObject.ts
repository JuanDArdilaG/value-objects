import { InvalidArgumentError } from "./errors";
import { IValueObject } from "./IValueObject";

export class NumberValueObject extends Number implements IValueObject<number> {
  constructor(readonly value: number) {
    super(value);
  }

  validate(): Error | void {
    if (typeof this.value !== "number")
      return new InvalidArgumentError("NumberValueObject", this.value);
  }

  static empty(): NumberValueObject {
    return new NumberValueObject(0);
  }

  static zero(): NumberValueObject {
    return new NumberValueObject(0);
  }

  plus(o: IValueObject<number>): NumberValueObject {
    return new NumberValueObject(this.value + o.value);
  }

  sustract(o: IValueObject<number>): NumberValueObject {
    return new NumberValueObject(this.value - o.value);
  }

  times(o: IValueObject<number>): NumberValueObject {
    return new NumberValueObject(this.value * o.value);
  }

  divide(o: IValueObject<number>): NumberValueObject {
    return new NumberValueObject(this.value / o.value);
  }

  abs(): NumberValueObject {
    return new NumberValueObject(Math.abs(this.value));
  }

  negate(): NumberValueObject {
    return new NumberValueObject(-this.value);
  }

  isPositive(): boolean {
    return this.value > 0;
  }

  isNegative(): boolean {
    return this.value < 0;
  }

  isZero(): boolean {
    return this.value === 0;
  }

  compareTo(o: IValueObject<number>): number {
    return this.value - o.value;
  }

  equalTo(o: IValueObject<number>): boolean {
    return o.value === this.value;
  }

  greaterThan(o: IValueObject<number>): boolean {
    return this.value > o.value;
  }

  lessThan(o: IValueObject<number>): boolean {
    return this.value < o.value;
  }

  greaterOrEqualThan(o: IValueObject<number>): boolean {
    return this.value >= o.value;
  }

  lessOrEqualThan(o: IValueObject<number>): boolean {
    return this.value <= o.value;
  }

  fixed(n: number): NumberValueObject {
    return new NumberValueObject(parseFloat(this.value.toFixed(n)));
  }
}
