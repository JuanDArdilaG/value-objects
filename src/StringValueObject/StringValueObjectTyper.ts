import { ITypable } from "../ValueObject/ITypable";
import { StringValueObject } from "./StringValueObject";

export class StringValueObjectTyper implements ITypable<string> {
  toType(val: StringValueObject): string {
    return val.value;
  }

  fromType(val: string): StringValueObject {
    return new StringValueObject(val);
  }
}
