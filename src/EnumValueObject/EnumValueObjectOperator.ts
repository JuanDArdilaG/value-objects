import { IOperable } from "../ValueObject/IOperable";
import { IValueObject } from "../ValueObject/IValueObject";

export class EnumValueObjectOperator<T extends Object> implements IOperable<T> {
  add(_: IValueObject<T>, __: IValueObject<T>): IValueObject<T> {
    throw new Error("method not implemented.");
  }
}
