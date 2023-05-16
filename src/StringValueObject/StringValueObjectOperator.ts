import { IOperable } from "../ValueObject/IOperable";
import { StringValueObject } from "./StringValueObject";

export class StringValueObjectOperator implements IOperable<string> {
  add(a: StringValueObject, b: StringValueObject): StringValueObject {
    return new StringValueObject(a.value + b.value);
  }
}
