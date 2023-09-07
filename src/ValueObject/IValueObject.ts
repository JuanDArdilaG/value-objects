import { IEncryptable } from "./IEncryptable";
import { IOperable } from "./IOperable";
import { IValidatable } from "./IValidatable";

export interface IValueObject<T extends Object>
  extends IValidatable<T>,
    IEncryptable<T>,
    Object {
  valueOf(): T;
  is(o: IValueObject<T>): boolean;
  add(other: IValueObject<T>): IValueObject<T>;
  equalTo(other: IValueObject<T>): boolean;
  operator?: IOperable<T>;
  isBiggerThan(other: IValueObject<T>): boolean;
}
