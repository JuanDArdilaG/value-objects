import { ValueObject } from "../ValueObject";
import { IValidator } from "../ValueObject/IValidator";

export class ArrayValueObjectValidator<T extends ValueObject<Object>>
  implements IValidator<T[]>
{
  validate(val: T[]): false | void | Error {
    if (!Array.isArray(val)) {
      return false;
    }
  }
}
