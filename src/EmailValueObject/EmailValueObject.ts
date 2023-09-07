import { StringValueObject } from "../StringValueObject/StringValueObject";
import { EmailValueObjectValidator } from "./EmailValueObjectValidator";

export class EmailValueObject extends StringValueObject {
  constructor(email: string) {
    super(email, {
      validatable: new EmailValueObjectValidator(),
    });
  }
}
