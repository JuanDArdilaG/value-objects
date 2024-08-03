import {
  StringValueObject,
  StringValueObjectOperator,
} from "../StringValueObject";

export class UUIDValueObjectOperator extends StringValueObjectOperator {
  plus(_: StringValueObject): StringValueObjectOperator {
    throw new Error("method not implemented.");
  }
}
