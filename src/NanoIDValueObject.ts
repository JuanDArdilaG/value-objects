import { nanoid } from "nanoid";
import { StringValueObject } from "./StringValueObject";
import { InvalidArgumentError } from "./errors";

export class Nanoid extends StringValueObject {
  constructor(value: string) {
    super(value, { minLength: 21, maxLength: 21 });
    this.validate();
  }

  validate(): void {
    if (this.value.length !== 21)
      throw new InvalidArgumentError("nanoid", this.value);
  }

  toString(): string {
    return this.value;
  }

  static generate(): Nanoid {
    return new Nanoid(nanoid());
  }
}
