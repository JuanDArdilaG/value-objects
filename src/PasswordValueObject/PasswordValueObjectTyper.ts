import { ITypable } from "../ValueObject/ITypable";
import { PasswordValueObject } from "./PasswordValueObject";

export class PasswordValueObjectTyper implements ITypable<string> {
  toType(val: PasswordValueObject): string {
    return val.value;
  }

  fromType(val: string): PasswordValueObject {
    return new PasswordValueObject(val, true);
  }
}
