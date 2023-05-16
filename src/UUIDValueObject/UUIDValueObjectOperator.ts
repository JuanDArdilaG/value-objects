import { IOperable } from "../ValueObject/IOperable";
import { UUIDValueObject } from "./UUIDValueObject";

export class UUIDValueObjectOperator implements IOperable<string> {
  add(_: UUIDValueObject, __: UUIDValueObject): UUIDValueObject {
    throw new Error("method not implemented.");
  }
}
