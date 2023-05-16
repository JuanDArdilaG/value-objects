import { v4 } from "uuid";
import { IdentifierValueObject } from "../IdentifierValueObject/IdentifierValueObject";
import { UUIDValueObjectValidator } from "./UUIDValueObjectValidator";
import { UUIDValueObjectTyper } from "./UUIDValueObjectTyper";
import { UUIDValueObjectOperator } from "./UUIDValueObjectOperator";

export class UUIDValueObject extends IdentifierValueObject {
  constructor(_value: string) {
    super(
      _value,
      new UUIDValueObjectOperator(),
      new UUIDValueObjectTyper(),
      new UUIDValueObjectValidator()
    );
  }

  get value(): string {
    return this._value;
  }

  static random(): UUIDValueObject {
    return new UUIDValueObject(v4());
  }
}
