import { ITypable } from "../ValueObject/ITypable";
import { IValueObject } from "../ValueObject/IValueObject";
import { UUIDValueObject } from "./UUIDValueObject";

export class UUIDValueObjectTyper implements ITypable<string> {
  toType(val: IValueObject<string>): string {
    return val.value;
  }

  fromType(val: string): IValueObject<string> {
    return new UUIDValueObject(val);
  }
}
