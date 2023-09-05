import { NumberValueObject } from "src/NumberValueObject";
import { BooleanValueObject } from "../BooleanValueObject";
import { IEncryptable } from "./IEncryptable";
import { ValueObject } from "./ValueObject";

export interface IOperable<T extends Object> extends IEncryptable<T> {
  add(a: ValueObject<T>, b: ValueObject<T>): ValueObject<T>;
  substract(a: ValueObject<T>, b: ValueObject<T>): ValueObject<T>;
  times(times: NumberValueObject, x: ValueObject<T>): ValueObject<T>;
  isLessThan(a: ValueObject<T>, b: ValueObject<T>): BooleanValueObject<T>;
  isBiggerThan(a: ValueObject<T>, b: ValueObject<T>): BooleanValueObject<T>;
  isBiggerOrEqualThan(
    a: ValueObject<T>,
    b: ValueObject<T>
  ): BooleanValueObject<T>;
  equalTo(a: ValueObject<T>, b: ValueObject<T>): BooleanValueObject<T>;
  differsFrom(a: ValueObject<T>, b: ValueObject<T>): BooleanValueObject<T>;
}
