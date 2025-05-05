import { InvalidArgumentError } from "./errors";
import { StringValueObject } from "./StringValueObject";

export abstract class EnumValueObject<
  T extends string
> extends StringValueObject {
  constructor(readonly values: T[], readonly value: T) {
    super(value);
  }

  validate(): Error | void {
    const stringValidation = super.validate();
    if (stringValidation) return stringValidation;
    if (!this.values.includes(this.value))
      throw new InvalidArgumentError("EnumValueObject", this.value);
  }
}
