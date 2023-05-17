import { IOperable } from "../ValueObject/IOperable";
import { NumberValueObject } from "./NumberValueObject";

export class NumberValueObjectOperator implements IOperable<number> {
  add(a: NumberValueObject, b: NumberValueObject): NumberValueObject {
    return new NumberValueObject(a.value + b.value);
  }

  encrypt(_: number): Promise<string> {
    throw new Error("Method not implemented.");
  }

  decrypt(_: string): Promise<number> {
    throw new Error("Method not implemented.");
  }
}
