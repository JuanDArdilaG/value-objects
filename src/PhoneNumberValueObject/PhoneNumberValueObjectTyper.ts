import { ITypable } from "../ValueObject/ITypable";
import { PhoneNumberValueObject } from "./PhoneNumberValueObject";

export class PhoneNumberValueObjectTyper implements ITypable<string> {
  toType(val: PhoneNumberValueObject): string {
    return val.value;
  }

  fromType(val: string): PhoneNumberValueObject {
    return new PhoneNumberValueObject(val);
  }
}
