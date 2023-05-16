import { IOperable } from "./IOperable";
import { IStringable } from "./IStringable";
import { ITypable } from "./ITypable";
import { IValidatable } from "./IValidatable";

export interface IValueObject<T extends Object>
  extends IValidatable<T>,
    ITypable<T>,
    IOperable<T>,
    IStringable {
  get value(): T;
  set value(val: T);
  is(o: T): boolean;
}
