import { ITypable } from "../ValueObject/ITypable";
import { EmailValueObject } from "./EmailValueObject";

export class EmailValueObjectTyper implements ITypable<string> {
  toType(val: EmailValueObject): string {
    return val.value;
  }

  fromType(val: string): EmailValueObject {
    return new EmailValueObject(val);
  }
}
