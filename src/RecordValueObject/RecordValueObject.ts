import { ValueObject } from "../ValueObject/ValueObject";
import { RecordValueObjectValidator } from "./RecordValueObjectValidator";
import {
  RecordValueObjectType,
  RecordAcceptedKeys,
  RecordAcceptedValues,
  RecordValueObjectTyper,
} from "./RecordValueObjectTyper";
import { RecordValueObjectOperator } from "./RecordValueObjectOperator";

export class RecordValueObject extends ValueObject<RecordValueObjectType> {
  constructor(_value: RecordValueObjectType) {
    super(
      new RecordValueObjectOperator(),
      new RecordValueObjectTyper(),
      new RecordValueObjectValidator(),
      _value
    );
  }

  get(key: RecordAcceptedKeys): RecordAcceptedValues {
    return this.value[key];
  }
}
