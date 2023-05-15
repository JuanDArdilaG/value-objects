import { IValidatable } from "./IValidatable";
import { ValueObject } from "./ValueObject";

export type RecordAcceptedKeys = string | number;
export type RecordAcceptedValues = string | number;

export type RecordValueObjectType = Record<
  RecordAcceptedKeys,
  RecordAcceptedValues
>;

export class RecordValueObjectValidator
  implements IValidatable<RecordValueObjectType>
{
  validate(value: RecordValueObjectType): boolean {
    return typeof value === "object";
  }
}

export class RecordValueObject<
  T extends Object
> extends ValueObject<RecordValueObjectType> {
  constructor(_value: RecordValueObjectType) {
    super(new RecordValueObjectValidator(), _value);
  }

  add(o: RecordValueObject<T>): RecordValueObject<T> {
    return new RecordValueObject({ ...this.value, ...o.value });
  }

  get(key: RecordAcceptedKeys): RecordAcceptedValues {
    return this.value[key];
  }
}
