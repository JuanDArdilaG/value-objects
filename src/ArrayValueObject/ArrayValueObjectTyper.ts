import { ITypable } from "../ValueObject/ITypable";
import { IValueObject } from "../ValueObject/IValueObject";
import { ArrayValueObject } from "./ArrayValueObject";

export class ArrayValueObjectTyper<T extends Object> implements ITypable<T[]> {
  toType(val: IValueObject<T[]>): T[] {
    return val.value;
  }

  fromType(val: T[]): IValueObject<T[]> {
    return new ArrayValueObject(val);
  }
}
