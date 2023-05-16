import { StringValueObject } from "../StringValueObject/StringValueObject";
import { EmailValueObjectOperator } from "./EmailValueObjectOperator";
import { EmailValueObjectTyper } from "./EmailValueObjectTyper";
import { EmailValueObjectValidator } from "./EmailValueObjectValidator";

export class EmailValueObject extends StringValueObject {
  constructor(email: string) {
    super(
      email,
      new EmailValueObjectOperator(),
      new EmailValueObjectTyper(),
      new EmailValueObjectValidator()
    );
  }
}
