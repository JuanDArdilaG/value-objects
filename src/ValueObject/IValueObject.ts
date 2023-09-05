import { BooleanValueObject } from "src/BooleanValueObject";
import { IEncryptable } from "./IEncryptable";
import { IStringable } from "./IStringable";
import { IValidatable } from "./IValidatable";
import { ValueObject } from "./ValueObject";

export interface IValueObject<T extends Object>
  extends IValidatable<T>,
    IStringable,
    IEncryptable<T> {
  get value(): T;
  set value(val: T);
  is(o: T): boolean;
  add(other: ValueObject<T>): ValueObject<T>;
  equalTo(other: IValueObject<T>): BooleanValueObject<T>;
  isBiggerThan(other: ValueObject<T>): boolean;
}
