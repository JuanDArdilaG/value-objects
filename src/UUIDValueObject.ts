import { v4, validate } from "uuid";
import { StringValueObject } from "./StringValueObject";
import { InvalidArgumentError } from "./errors";

export class UUIDValueObject extends StringValueObject {
  constructor(readonly value: string) {
    super(value);
  }

  validate(): Error | void {
    const strValidation = super.validate();
    if (strValidation) return strValidation;

    if (!validate(this.value))
      return new InvalidArgumentError("UUIDValueObject", this.value);
  }

  static random(): UUIDValueObject {
    return new UUIDValueObject(v4());
  }
}
