import { ValueObject } from "./ValueObject";

export interface IOperable<T extends Object> {
  add(a: ValueObject<T>, b: ValueObject<T>): ValueObject<T>;
}
