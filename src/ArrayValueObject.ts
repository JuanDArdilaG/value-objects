import { InvalidArgumentError } from "./errors";
import { IValueObject } from "./IValueObject";

export class ArrayValueObject<T extends IValueObject<any>>
  extends Array
  implements IValueObject<T[]>
{
  constructor(readonly value: T[]) {
    super();
  }

  validate(): Error | void {
    if (!Array.isArray(this.value))
      return new InvalidArgumentError("ArrayValueObject", this.value);
  }

  static empty<T extends IValueObject<any>>(): ArrayValueObject<T> {
    return new ArrayValueObject([]);
  }

  equalTo(_: IValueObject<T[]>): boolean {
    throw Error("pending implementation");
  }
}
