import { InvalidArgumentError } from "./errors";
import { IValueObject } from "./IValueObject";

export class BooleanValueObject
  extends Boolean
  implements IValueObject<boolean>
{
  constructor(readonly value: boolean) {
    super(value);
  }

  validate(): Error | void {
    if (typeof this.value !== "boolean")
      return new InvalidArgumentError("BooleanValueObject", this.value);
  }

  static true(): BooleanValueObject {
    return new BooleanValueObject(true);
  }

  static false(): BooleanValueObject {
    return new BooleanValueObject(false);
  }

  or(other: BooleanValueObject): BooleanValueObject {
    return new BooleanValueObject(this.valueOf() || other.valueOf());
  }

  and(other: BooleanValueObject): BooleanValueObject {
    return new BooleanValueObject(this.valueOf() && other.valueOf());
  }

  not(): BooleanValueObject {
    return new BooleanValueObject(!this.valueOf());
  }

  equalTo(o: IValueObject<boolean>): boolean {
    return o.value === this.value;
  }

  toString(): string {
    return `${this.valueOf()}`;
  }
}
