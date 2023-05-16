import { ITypable } from "../ValueObject/ITypable";
import { IValueObject } from "../ValueObject/IValueObject";
import { PasswordValueObject } from "./PasswordValueObject";

export class PasswordValueObjectTyper implements ITypable<string> {
  toType(val: IValueObject<string>): string {
    return val.value;
  }

  fromType(val: string): IValueObject<string> {
    return new PasswordValueObject(val, true);
  }
}
