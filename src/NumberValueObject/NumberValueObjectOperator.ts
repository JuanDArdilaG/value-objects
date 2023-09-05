import { ValueObject } from "src/ValueObject";
import { BooleanValueObject } from "../BooleanValueObject";
import { IOperable } from "../ValueObject/IOperable";
import { NumberValueObject } from "./NumberValueObject";

export class NumberValueObjectOperator implements IOperable<number> {
  add(a: NumberValueObject, b: NumberValueObject): NumberValueObject {
    return new NumberValueObject(a.value + b.value);
  }

  substract(a: NumberValueObject, b: NumberValueObject): NumberValueObject {
    return new NumberValueObject(a.value - b.value);
  }

  times(a: NumberValueObject, x: NumberValueObject): NumberValueObject {
    return new NumberValueObject(a.value * x.value);
  }

  equalTo(
    a: NumberValueObject,
    b: NumberValueObject
  ): BooleanValueObject<number> {
    return new BooleanValueObject(a.value === b.value);
  }

  differsFrom(
    a: ValueObject<number>,
    b: ValueObject<number>
  ): BooleanValueObject<number> {
    return new BooleanValueObject(a.value !== b.value);
  }

  isLessThan(
    a: NumberValueObject,
    b: NumberValueObject
  ): BooleanValueObject<number> {
    return new BooleanValueObject(a.value < b.value);
  }

  isBiggerThan(
    a: ValueObject<number>,
    b: ValueObject<number>
  ): BooleanValueObject<number> {
    return new BooleanValueObject(a.value > b.value);
  }

  isBiggerOrEqualThan(
    a: NumberValueObject,
    b: NumberValueObject
  ): BooleanValueObject<number> {
    return new BooleanValueObject<number>(a.value > b.value).or(
      this.equalTo(a, b)
    );
  }

  encrypt(_: number): Promise<string> {
    throw new Error("Method not implemented.");
  }

  decrypt(_: string): Promise<number> {
    throw new Error("Method not implemented.");
  }

  isPositive(n: NumberValueObject): BooleanValueObject<number> {
    return new BooleanValueObject<number>(n.value > 0);
  }

  isNegative(n: NumberValueObject): BooleanValueObject<number> {
    return new BooleanValueObject<number>(n.value < 0);
  }

  isZero(n: NumberValueObject): BooleanValueObject<number> {
    return new BooleanValueObject<number>(n.value === 0);
  }
}
