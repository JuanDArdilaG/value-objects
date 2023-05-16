import { ITypable } from "../ValueObject/ITypable";
import { IValueObject } from "../ValueObject/IValueObject";
import { RecordValueObject } from "./RecordValueObject";

export type RecordAcceptedKeys = string | number;
export type RecordAcceptedValues = string | number;

export type RecordValueObjectType = Record<
  RecordAcceptedKeys,
  RecordAcceptedValues
>;

export class RecordValueObjectTyper implements ITypable<RecordValueObjectType> {
  toType(val: IValueObject<RecordValueObjectType>): RecordValueObjectType {
    return val.value;
  }

  fromType(val: RecordValueObjectType): IValueObject<RecordValueObjectType> {
    return new RecordValueObject(val);
  }
}
