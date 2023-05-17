import { ValueObject } from "../ValueObject/ValueObject";
import { RecordValueObjectValidator } from "./RecordValueObjectValidator";
import { RecordValueObjectOperator } from "./RecordValueObjectOperator";

export type RecordAcceptedKeys = string | number;
export type RecordAcceptedValues = string | number;

export type RecordValueObjectType = Record<
  RecordAcceptedKeys,
  RecordAcceptedValues
>;
export class RecordValueObject extends ValueObject<RecordValueObjectType> {
  constructor(_value: RecordValueObjectType) {
    super(
      {
        operable: new RecordValueObjectOperator(),
        validatable: new RecordValueObjectValidator(),
      },
      _value
    );
  }

  get(key: RecordAcceptedKeys): RecordAcceptedValues {
    return this.value[key];
  }
}
