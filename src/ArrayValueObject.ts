import { IValidatable } from "./IValidatable";
import { IValueObject } from "./IValueObject";
import { ValueObject } from "./ValueObject";

export class ArrayValueObjectValidator<T extends ValueObject<Object>>
  implements IValidatable<T[]>
{
  validate(value: T[]): boolean {
    return Array.isArray(value);
  }
}

export class ArrayValueObject<
  T extends ValueObject<Object>
> extends ValueObject<T[]> {
  constructor(value: T[]) {
    super(new ArrayValueObjectValidator(), value);
  }

  empty<T extends ValueObject<Object>>(): ArrayValueObject<T> {
    return new ArrayValueObject([]);
  }

  add(o: IValueObject<T[]>): IValueObject<T[]> {
    return new ArrayValueObject([...this.value, ...o.value]);
  }
}
