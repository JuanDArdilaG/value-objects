import { IOperable } from "../ValueObject/IOperable";
import { PasswordValueObject } from "./PasswordValueObject";

export class PasswordValueObjectOperator implements IOperable<string> {
  add(_: PasswordValueObject, __: PasswordValueObject): PasswordValueObject {
    throw new Error("Method not implemented.");
  }
}
