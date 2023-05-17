import { StringValueObjectOperator } from "../StringValueObject";
import { UUIDValueObject } from "./UUIDValueObject";

export class UUIDValueObjectOperator extends StringValueObjectOperator {
  add(_: UUIDValueObject, __: UUIDValueObject): UUIDValueObject {
    throw new Error("method not implemented.");
  }

  encrypt(val: string): Promise<string> {
    return super.encrypt(val);
  }

  decrypt(val: string): Promise<string> {
    return super.decrypt(val);
  }
}
