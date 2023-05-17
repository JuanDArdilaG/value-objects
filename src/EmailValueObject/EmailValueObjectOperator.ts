import { StringValueObjectOperator } from "../StringValueObject";
import { EmailValueObject } from "./EmailValueObject";

export class EmailValueObjectOperator extends StringValueObjectOperator {
  add(_: EmailValueObject, __: EmailValueObject): EmailValueObject {
    throw new Error("Method not implemented.");
  }

  encrypt(val: string): Promise<string> {
    return super.encrypt(val);
  }

  decrypt(val: string): Promise<string> {
    return super.decrypt(val);
  }
}
