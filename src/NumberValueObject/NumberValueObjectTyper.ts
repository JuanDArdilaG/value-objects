import { ITypable } from "../ValueObject/ITypable";
import { IValueObject } from "../ValueObject/IValueObject";
import { NumberValueObject } from "./NumberValueObject";

export class NumberValueObjectTyper implements ITypable<number> {
  toType(val: IValueObject<number>): number {
    return val.value;
  }

  fromType(val: number): IValueObject<number> {
    return new NumberValueObject(val);
  }
}
