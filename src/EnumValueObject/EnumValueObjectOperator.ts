import { ValueObject } from "../ValueObject";
import { IOperable } from "../ValueObject/IOperable";

export class EnumValueObjectOperator<T extends Object> implements IOperable<T> {
  add(_: ValueObject<T>, __: ValueObject<T>): ValueObject<T> {
    throw new Error("method not implemented.");
  }

  encrypt(_: T): Promise<string> {
    throw new Error("Method not implemented.");
  }

  decrypt(_: string): Promise<T> {
    throw new Error("Method not implemented.");
  }
}
