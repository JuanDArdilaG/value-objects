import { IStringable } from "./IStringable";
import { ITypable } from "./ITypable";
import { IValidatable } from "./IValidatable";
import { ValueObject } from "./ValueObject";

export interface IValueObject<T extends Object>
  extends IValidatable<T>,
    ITypable<T>,
    IStringable {
  get value(): T;
  set value(val: T);
  is(o: T): boolean;
  add(other: ValueObject<T>): ValueObject<T>;
  equal(other: IValueObject<Object>): boolean;
  isBiggerThan(other: ValueObject<T>): boolean;
}
