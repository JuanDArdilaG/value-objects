import { IValueObject } from "./IValueObject";

export interface IArithmeticOperator<T extends Object> {
  plus(other: IValueObject<T>): IValueObject<T>;
  substract(other: IValueObject<T>): IValueObject<T>;
  times(times: number, x: IValueObject<T>): IValueObject<T>;
}
