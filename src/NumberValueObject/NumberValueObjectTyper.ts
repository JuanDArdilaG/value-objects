import { ITypable } from "../ValueObject/ITypable";
import { NumberValueObject } from "./NumberValueObject";

export class NumberValueObjectTyper implements ITypable<number> {
  toType(val: NumberValueObject): number {
    return val.value;
  }

  fromType(val: number): NumberValueObject {
    return new NumberValueObject(val);
  }
}
