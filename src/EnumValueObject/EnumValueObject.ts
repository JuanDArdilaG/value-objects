import { ValueObject } from "../ValueObject/ValueObject";
import { EnumValueObjectValidator } from "./EnumValueObjectValidator";

export abstract class EnumValueObject<T extends Object> extends ValueObject<T> {
  constructor(_values: T[], value: T) {
    super(
      {
        validator: new EnumValueObjectValidator(_values),
      },
      value
    );
  }
}
