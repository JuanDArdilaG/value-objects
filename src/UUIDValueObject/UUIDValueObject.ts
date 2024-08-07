import { v4 } from "uuid";
import { UUIDValueObjectValidator } from "./UUIDValueObjectValidator";
import { ValueObject } from "../ValueObject";

export class UUIDValueObject extends ValueObject<string> {
  constructor(_value: string) {
    super({ validator: new UUIDValueObjectValidator() }, _value);
  }

  static random(): UUIDValueObject {
    return new UUIDValueObject(v4());
  }
}
