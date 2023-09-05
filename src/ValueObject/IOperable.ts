import { IEncryptable } from "./IEncryptable";

export interface IOperable<T extends Object> extends IEncryptable<T> {
  add(a: T, b: T): T;
  substract(a: T, b: T): T;
  times(times: number, x: T): T;
  isLessThan(a: T, b: T): boolean;
  isBiggerThan(a: T, b: T): boolean;
  isBiggerOrEqualThan(a: T, b: T): boolean;
  equalTo(a: T, b: T): boolean;
  differsFrom(a: T, b: T): boolean;
}
