import { ITypable } from "../ValueObject/ITypable";
import { BooleanValueObject } from "./BooleanValueObject";

export class BooleanValueObjectTyper<T extends any>
  implements ITypable<boolean>
{
  toType(val: BooleanValueObject<T>): boolean {
    return val.value;
  }

  fromType(val: boolean): BooleanValueObject<T> {
    return new BooleanValueObject(val);
  }
}
