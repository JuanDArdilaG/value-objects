import { ValueObject, ValueObjectOptions } from "../ValueObject";
import { StringValueDefaultOptions } from "./StringValueOptions";

export class StringValueObject extends ValueObject<string> {
  constructor(_value: string, options?: ValueObjectOptions<string>) {
    super(options ?? StringValueDefaultOptions, _value);
  }

  static empty(): StringValueObject {
    return new StringValueObject("");
  }

  static withDefaultOptions(value: string): StringValueObject {
    return new StringValueObject(value);
  }
}
