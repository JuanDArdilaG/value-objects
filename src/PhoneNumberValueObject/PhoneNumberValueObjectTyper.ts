import { ITypable } from "../ValueObject/ITypable";
import { IValueObject } from "../ValueObject/IValueObject";
import { PhoneNumberValueObject } from "./PhoneNumberValueObject";

export class PhoneNumberValueObjectTyper implements ITypable<string> {
  toType(val: IValueObject<string>): string {
    return val.value;
  }

  fromType(val: string): IValueObject<string> {
    return new PhoneNumberValueObject(val);
  }
}
