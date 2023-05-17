import { IOperable } from "../ValueObject/IOperable";
import { BooleanValueObject } from "./BooleanValueObject";

export class BooleanValueObjectOperator<T extends any>
  implements IOperable<boolean>
{
  add(
    a: BooleanValueObject<T>,
    b: BooleanValueObject<T>
  ): BooleanValueObject<T> {
    return new BooleanValueObject<T>(a.value && b.value);
  }

  encrypt(_: boolean): Promise<string> {
    throw new Error("Method not implemented.");
  }

  decrypt(_: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}
