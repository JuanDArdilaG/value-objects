import { ITypable } from "../ValueObject/ITypable";
import { EnumValueObject } from "./EnumValueObject";

export class EnumValueObjectTyper<T extends Object> implements ITypable<T> {
  toType(val: EnumValueObject<T>): T {
    return val.value;
  }

  fromType(_: T): EnumValueObject<T> {
    throw new Error("method not implemented.");
  }
}
