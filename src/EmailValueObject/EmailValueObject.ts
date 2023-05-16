import { StringValueObject } from "../StringValueObject/StringValueObject";
import { EmailValueObjectOperator } from "./EmailValueObjectOperator";
import { EmailValueObjectValidator } from "./EmailValueObjectValidator";

export class EmailValueObject extends StringValueObject {
  constructor(email: string) {
    super(email, {
      operable: new EmailValueObjectOperator(),
      validatable: new EmailValueObjectValidator(),
    });
  }
}
