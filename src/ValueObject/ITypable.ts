import { IValueObject } from "./IValueObject";

export type Typable = Object;

export interface ITypable<T extends Object> {
  toType(val: IValueObject<T>): T;
  fromType(val: T): IValueObject<T>;
}
