import { InvalidArgumentError } from "./errors";
import { StringValueObject } from "./StringValueObject";

export abstract class EnumValueObject extends StringValueObject {
  constructor(readonly values: string[], readonly value: string) {
    super(value);
  }

  validate(): Error | void {
    const stringValidation = super.validate();
    if (stringValidation) return stringValidation;
    if (!this.values.includes(this.value))
      throw new InvalidArgumentError("EnumValueObject", this.value);
  }
}
