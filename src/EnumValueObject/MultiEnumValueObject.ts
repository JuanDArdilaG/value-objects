import { ValueObject } from "../ValueObject/ValueObject";
import { MultiEnumValueObjectValidator } from "./MultiEnumValueObjectValidator";

export abstract class MultiEnumValueObject<
  T extends Object
> extends ValueObject<T[]> {
  constructor(_values: T[], value: T[]) {
    super(
      {
        validator: new MultiEnumValueObjectValidator(_values),
      },
      value
    );
  }
}
