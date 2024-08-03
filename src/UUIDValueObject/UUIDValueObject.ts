import { v4 } from "uuid";
import { IdentifierValueObject } from "../IdentifierValueObject/IdentifierValueObject";
import { UUIDValueObjectValidator } from "./UUIDValueObjectValidator";

export class UUIDValueObject extends IdentifierValueObject<string> {
  constructor(_value: string) {
    super(_value, new UUIDValueObjectValidator());
  }

  static random(): UUIDValueObject {
    return new UUIDValueObject(v4());
  }
}
