import { IOperable } from "../ValueObject/IOperable";
import { EmailValueObject } from "./EmailValueObject";

export class EmailValueObjectOperator implements IOperable<string> {
  add(_: EmailValueObject, __: EmailValueObject): EmailValueObject {
    throw new Error("Method not implemented.");
  }
}
