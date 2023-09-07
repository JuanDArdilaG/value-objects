import { IValidator } from "../ValueObject/IValidator";
import { RecordValueObjectType } from "./RecordValueObject";

export class RecordValueObjectValidator
  implements IValidator<RecordValueObjectType>
{
  validate(value: RecordValueObjectType): Error | false | void {
    if (typeof value !== "object") return false;
  }
}
