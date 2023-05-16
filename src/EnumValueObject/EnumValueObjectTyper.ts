import { ITypable } from "../ValueObject/ITypable";
import { IValueObject } from "../ValueObject/IValueObject";

export class EnumValueObjectTyper<T extends Object> implements ITypable<T> {
  toType(val: IValueObject<T>): T {
    return val.value;
  }

  fromType(_: T): IValueObject<T> {
    throw new Error("method not implemented.");
  }
}
