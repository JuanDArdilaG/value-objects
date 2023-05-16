import { ITypable } from "../ValueObject/ITypable";
import { ArrayValueObject } from "./ArrayValueObject";

export class ArrayValueObjectTyper<T extends Object> implements ITypable<T[]> {
  toType(val: ArrayValueObject<T>): T[] {
    return val.value;
  }

  fromType(val: T[]): ArrayValueObject<T> {
    return new ArrayValueObject(val);
  }
}
