import { ValueObject } from "../ValueObject/ValueObject";
import { ArrayValueObjectValidator } from "./ArrayValueObjectValidator";

export class ArrayValueObject<
  T extends ValueObject<Object>
> extends ValueObject<T[]> {
  constructor(value: T[]) {
    super(
      {
        validator: new ArrayValueObjectValidator<T>(),
      },
      value
    );
  }

  empty<T extends ValueObject<Object>>(): ArrayValueObject<T> {
    return new ArrayValueObject([]);
  }
}
