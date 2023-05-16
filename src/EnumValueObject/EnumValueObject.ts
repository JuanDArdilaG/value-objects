import { ValueObject } from "../ValueObject/ValueObject";
import { EnumValueObjectOperator } from "./EnumValueObjectOperator";
import { EnumValueObjectValidator } from "./EnumValueObjectValidator";

export abstract class EnumValueObject<T extends Object> extends ValueObject<T> {
  constructor(_values: T[], value: T) {
    super(
      {
        operable: new EnumValueObjectOperator(),
        validatable: new EnumValueObjectValidator(_values),
        isPII: false,
      },
      value
    );
  }
}
