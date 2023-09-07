export interface IOperable<T extends Object> {
  add(other: T): T;
  substract(other: T): T;
  times(times: number, x: T): T;
  isLessThan(other: T): boolean;
  isBiggerThan(other: T): boolean;
  isBiggerOrEqualThan(other: T): boolean;
  equalTo(other: T): boolean;
  differsFrom(other: T): boolean;
}
