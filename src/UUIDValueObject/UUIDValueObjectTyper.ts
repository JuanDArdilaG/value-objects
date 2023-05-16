import { ITypable } from "../ValueObject/ITypable";
import { UUIDValueObject } from "./UUIDValueObject";

export class UUIDValueObjectTyper implements ITypable<string> {
  toType(val: UUIDValueObject): string {
    return val.value;
  }

  fromType(val: string): UUIDValueObject {
    return new UUIDValueObject(val);
  }
}
