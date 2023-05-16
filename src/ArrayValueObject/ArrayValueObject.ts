import { ValueObject } from "../ValueObject/ValueObject";
import { ArrayValueObjectOperator } from "./ArrayValueObjectOperator";
import { ArrayValueObjectTyper } from "./ArrayValueObjectTyper";
import { ArrayValueObjectValidator } from "./ArrayValueObjectValidator";

export class ArrayValueObject<T extends Object> extends ValueObject<T[]> {
  constructor(value: T[]) {
    super(
      new ArrayValueObjectOperator(),
      new ArrayValueObjectTyper(),
      new ArrayValueObjectValidator(),
      value
    );
  }

  empty<T extends ValueObject<Object>>(): ArrayValueObject<T> {
    return new ArrayValueObject([]);
  }
}
