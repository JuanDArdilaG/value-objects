import { IValidator } from "../ValueObject/IValidator";
import { TPasswordValueObject } from "./PasswordValueObject";

export class PasswordValueObjectValidator
  implements IValidator<TPasswordValueObject>
{
  constructor() {}

  validate(val: TPasswordValueObject): Error | boolean {
    if (!val.isEncrypted && (val.value.length < 5 || val.value.length > 50)) {
      return new Error("Password length must be between 5 and 50 characters");
    }
  }
}
