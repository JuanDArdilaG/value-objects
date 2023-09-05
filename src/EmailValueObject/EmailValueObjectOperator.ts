import { StringValueObjectOperator } from "../StringValueObject";

export class EmailValueObjectOperator extends StringValueObjectOperator {
  encrypt(val: string): Promise<string> {
    return super.encrypt(val);
  }

  decrypt(val: string): Promise<string> {
    return super.decrypt(val);
  }
}
