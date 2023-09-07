import { v4 } from "uuid";
import { IdentifierValueObject } from "../IdentifierValueObject/IdentifierValueObject";
import { UUIDValueObjectValidator } from "./UUIDValueObjectValidator";
import { UUIDValueObjectOperator } from "./UUIDValueObjectOperator";

export class UUIDValueObject extends IdentifierValueObject {
  constructor(_value: string) {
    super(_value, {
      operable: new UUIDValueObjectOperator(_value),
      validatable: new UUIDValueObjectValidator(),
    });
  }

  static random(): UUIDValueObject {
    return new UUIDValueObject(v4());
  }
}
