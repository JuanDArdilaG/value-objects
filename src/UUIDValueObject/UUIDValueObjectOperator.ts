import { StringValueObjectOperator } from "../StringValueObject";

export class UUIDValueObjectOperator extends StringValueObjectOperator {
  add(_: string, __: string): string {
    throw new Error("method not implemented.");
  }

  encrypt(val: string): Promise<string> {
    return super.encrypt(val);
  }

  decrypt(val: string): Promise<string> {
    return super.decrypt(val);
  }
}
