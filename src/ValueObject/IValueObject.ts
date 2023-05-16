import { IStringable } from "./IStringable";
import { ITypable } from "./ITypable";
import { IValidatable } from "./IValidatable";

export interface IValueObject<T extends Object>
  extends IValidatable<T>,
    ITypable<T>,
    IStringable {
  get value(): T;
  set value(val: T);
  is(o: T): boolean;
  add(other: IValueObject<T>): IValueObject<T>;
  equal(other: IValueObject<Object>): boolean;
}
