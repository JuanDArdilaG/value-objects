import { InvalidArgumentError } from "./errors";
import { InvalidStringLengthError } from "./errors/InvalidStringLengthError";
import { IValueObject } from "./IValueObject";

export type StringValueObjectConfig = {
  minLength: number;
  maxLength: number;
};

export const StringValueObjectDefaultConfig: StringValueObjectConfig = {
  minLength: 0,
  maxLength: 10000,
};

export class StringValueObject extends String implements IValueObject<string> {
  constructor(
    readonly value: string,
    private readonly _config: StringValueObjectConfig = StringValueObjectDefaultConfig
  ) {
    super(value);
  }

  validate(): Error | void {
    if (typeof this.value !== "string")
      return new InvalidArgumentError("StringValueObject", this.value);
    if (
      this.value.length > this._config.maxLength ||
      this.value.length < this._config.minLength
    )
      throw new InvalidStringLengthError("StringValueObject", this._config);
  }

  static empty(): StringValueObject {
    return new StringValueObject("");
  }

  compareTo(o: IValueObject<string>): number {
    return this.value.localeCompare(o.value);
  }

  equalTo(o: IValueObject<string>): boolean {
    return o.value === this.value;
  }
}
