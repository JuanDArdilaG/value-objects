import { ValueObject } from "../ValueObject/ValueObject";
import { EnumValueObjectOperator } from "./EnumValueObjectOperator";
import { EnumValueObjectTyper } from "./EnumValueObjectTyper";
import { EnumValueObjectValidator } from "./EnumValueObjectValidator";

export abstract class EnumValueObject<T extends Object> extends ValueObject<T> {
  constructor(_values: T[], value: T) {
    super(
      new EnumValueObjectOperator(),
      new EnumValueObjectTyper(),
      new EnumValueObjectValidator(_values),
      value
    );
  }
}
