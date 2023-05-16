import { IValueObject } from "./IValueObject";

export interface IOperable<T extends Object> {
  add(a: IValueObject<T>, b: IValueObject<T>): IValueObject<T>;
}
