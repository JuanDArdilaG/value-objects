import { ValueObject } from "../ValueObject/ValueObject";
import { ArrayValueObjectOperator } from "./ArrayValueObjectOperator";
import { ArrayValueObjectValidator } from "./ArrayValueObjectValidator";

export class ArrayValueObject<T extends Object> extends ValueObject<T[]> {
  constructor(value: T[]) {
    super(
      {
        validatable: new ArrayValueObjectValidator<T>(),
        operable: new ArrayValueObjectOperator<T>(),
        isPII: false,
      },
      value
    );
  }

  empty<T extends ValueObject<Object>>(): ArrayValueObject<T> {
    return new ArrayValueObject([]);
  }
}
