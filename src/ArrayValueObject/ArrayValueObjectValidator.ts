import { ValueObject } from "../ValueObject";
import { IValidator } from "../ValueObject/IValidator";

export class ArrayValueObjectValidator<T extends ValueObject<Object>>
  implements IValidator<T[]>
{
  validate(val: T[]): Error | boolean {
    return Array.isArray(val);
  }
}
