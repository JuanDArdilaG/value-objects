import { IValidatable } from "./IValidatable";

export interface IValueObject<T extends Object> extends IValidatable<T> {
  get value(): T;
  set value(val: T);
  add(o: IValueObject<T>): IValueObject<T>;
  equalTo(o: IValueObject<T>): boolean;
  is(o: T): boolean;
  toString(): string;
}
