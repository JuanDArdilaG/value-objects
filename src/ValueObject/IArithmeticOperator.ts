import { IValueObject } from "./IValueObject";

export interface IOperator<T extends Object> {
  plus(other: IValueObject<T>): IOperator<T>;
  substract(other: IValueObject<T>): IOperator<T>;
  times(times: number, x: IValueObject<T>): IOperator<T>;
  isLessThan(other: IValueObject<T>): boolean;
  isBiggerThan(other: IValueObject<T>): boolean;
  isBiggerOrEqualThan(other: IValueObject<T>): boolean;
  equalTo(other: IValueObject<T>): boolean;
  differsFrom(other: IValueObject<T>): boolean;
}
