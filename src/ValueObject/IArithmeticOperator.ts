import { IValueObject } from "./IValueObject";

export interface IOperator<T extends Object> {
  plus(other: IValueObject<T>): IValueObject<T>;
  substract(other: IValueObject<T>): IValueObject<T>;
  times(times: number, x: IValueObject<T>): IValueObject<T>;
  isLessThan(other: IValueObject<T>): boolean;
  isBiggerThan(other: IValueObject<T>): boolean;
  isBiggerOrEqualThan(other: IValueObject<T>): boolean;
  equalTo(other: IValueObject<T>): boolean;
  differsFrom(other: IValueObject<T>): boolean;
}
