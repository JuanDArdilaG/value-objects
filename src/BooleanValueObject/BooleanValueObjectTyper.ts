import { ITypable } from "../ValueObject/ITypable";
import { IValueObject } from "../ValueObject/IValueObject";
import { BooleanValueObject } from "./BooleanValueObject";

export class BooleanValueObjectTyper implements ITypable<boolean> {
  toType(val: IValueObject<boolean>): boolean {
    return val.value;
  }

  fromType(val: boolean): IValueObject<boolean> {
    return new BooleanValueObject(val);
  }
}
