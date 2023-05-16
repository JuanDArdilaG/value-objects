import { ITypable } from "../ValueObject/ITypable";
import { RecordValueObject } from "./RecordValueObject";

export type RecordAcceptedKeys = string | number;
export type RecordAcceptedValues = string | number;

export type RecordValueObjectType = Record<
  RecordAcceptedKeys,
  RecordAcceptedValues
>;

export class RecordValueObjectTyper implements ITypable<RecordValueObjectType> {
  toType(val: RecordValueObject): RecordValueObjectType {
    return val.value;
  }

  fromType(val: RecordValueObjectType): RecordValueObject {
    return new RecordValueObject(val);
  }
}
