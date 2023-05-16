import { ITypable } from "../ValueObject/ITypable";
import { IValueObject } from "../ValueObject/IValueObject";
import { EmailValueObject } from "./EmailValueObject";

export class EmailValueObjectTyper implements ITypable<string> {
  toType(val: IValueObject<string>): string {
    return val.value;
  }

  fromType(val: string): IValueObject<string> {
    return new EmailValueObject(val);
  }
}
