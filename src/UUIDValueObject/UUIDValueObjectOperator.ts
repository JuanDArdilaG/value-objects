import { StringValueObjectOperator } from "../StringValueObject";

export class UUIDValueObjectOperator extends StringValueObjectOperator {
  add(_: string): string {
    throw new Error("method not implemented.");
  }
}
