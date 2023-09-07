import { IValidator } from "./IValidator";

export interface IValueObject<T extends Object> extends IValidator<T>, Object {
  valueOf(): T;
  is(o: IValueObject<T>): boolean;
}
