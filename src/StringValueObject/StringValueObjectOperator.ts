import { IOperable } from "../ValueObject/IOperable";
import { IValueObject } from "../ValueObject/IValueObject";
import { StringValueObject } from "./StringValueObject";

export class StringValueObjectOperator implements IOperable<string> {
  add(a: IValueObject<string>, b: IValueObject<string>): IValueObject<string> {
    return new StringValueObject(a.value + b.value);
  }
}
