import { ValueObject } from "../ValueObject";
import { ExceptionValueObjectValidator } from "./ExceptionValueObjectValidator";

export class ExceptionValueObject extends ValueObject<Error> {
  constructor(val: Error) {
    super({ validator: new ExceptionValueObjectValidator() }, val);
  }
}
