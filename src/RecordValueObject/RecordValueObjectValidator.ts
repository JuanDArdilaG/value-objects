import { IValidator } from "../ValueObject/IValidator";
import { RecordValueObjectType } from "./RecordValueObject";

export class RecordValueObjectValidator
  implements IValidator<RecordValueObjectType>
{
  validate(value: RecordValueObjectType): Error | boolean {
    return typeof value === "object";
  }
}
