import { v4, validate } from "uuid";
import { Identifier } from "./Identifier";
import { IValidatable } from "./IValidatable";

export class UUIDValidator implements IValidatable<string> {
  validate(val: string): boolean {
    return validate(val);
  }
}

export class UUID extends Identifier {
  constructor(_value: string) {
    super(_value, { minLength: 0, maxLength: 200 }, new UUIDValidator());
  }

  get value(): string {
    return this._value;
  }

  static random(): UUID {
    return new UUID(v4());
  }
}
