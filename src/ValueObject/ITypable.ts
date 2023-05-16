import { ValueObject } from "./ValueObject";

export type Typable = Object;

export interface ITypable<T extends Object> {
  toType(val: ValueObject<T>): T;
  fromType(val: T): ValueObject<T>; // TODO: remove this and its usage
}
