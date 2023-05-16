import { ITypable } from "../ValueObject/ITypable";
import { IValueObject } from "../ValueObject/IValueObject";
import { StringValueObject } from "./StringValueObject";

export class StringValueObjectTyper implements ITypable<string> {
  toType(val: IValueObject<string>): string {
    return val.value;
  }

  fromType(val: string): IValueObject<string> {
    return new StringValueObject(val);
  }
}
