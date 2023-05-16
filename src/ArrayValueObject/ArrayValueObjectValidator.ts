import { IValidatable } from "../ValueObject/IValidatable";

export class ArrayValueObjectValidator<T extends Object>
  implements IValidatable<T[]>
{
  validate(val: T[]): false | void | Error {
    if (!Array.isArray(val)) {
      return false;
    }
  }
}
