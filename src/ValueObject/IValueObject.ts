import { IEncryptable } from "./IEncryptable";
import { IValidatable } from "./IValidatable";
import { ValueObject } from "./ValueObject";

export interface IValueObject<T extends Object>
  extends IValidatable<T>,
    IEncryptable<T>,
    Object {
  valueOf(): Object;
  is(o: T): boolean;
  add(other: ValueObject<T>): ValueObject<T>;
  equalTo(other: ValueObject<T>): boolean;
  isBiggerThan(other: ValueObject<T>): boolean;
}
