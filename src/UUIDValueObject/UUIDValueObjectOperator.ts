import {
  StringValueObject,
  StringValueObjectOperator,
} from "../StringValueObject";

export class UUIDValueObjectOperator extends StringValueObjectOperator {
  plus(_: StringValueObject): StringValueObject {
    throw new Error("method not implemented.");
  }
}
