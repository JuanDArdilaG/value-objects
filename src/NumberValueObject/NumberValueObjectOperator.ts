import { IOperable } from "../ValueObject/IOperable";
import { IValueObject } from "../ValueObject/IValueObject";
import { NumberValueObject } from "./NumberValueObject";

export class NumberValueObjectOperator implements IOperable<number> {
  add(a: IValueObject<number>, b: IValueObject<number>): IValueObject<number> {
    return new NumberValueObject(a.value + b.value);
  }
}
