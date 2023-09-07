import { IValueObject } from "./IValueObject";

export interface ILogicOperator<T extends Object> {
  isLessThan(other: IValueObject<T>): boolean;
  isBiggerThan(other: IValueObject<T>): boolean;
  isBiggerOrEqualThan(other: IValueObject<T>): boolean;
  equalTo(other: IValueObject<T>): boolean;
  differsFrom(other: IValueObject<T>): boolean;
}
