import { IOperable } from "../ValueObject/IOperable";
import { IValueObject } from "../ValueObject/IValueObject";

export class EmailValueObjectOperator implements IOperable<string> {
  add(_: IValueObject<string>, __: IValueObject<string>): IValueObject<string> {
    throw new Error("method not implemented.");
  }
}
