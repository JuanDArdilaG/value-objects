import { IValidatable } from "../ValueObject/IValidatable";
import { RecordValueObjectType } from "./RecordValueObjectTyper";

export class RecordValueObjectValidator
  implements IValidatable<RecordValueObjectType>
{
  validate(value: RecordValueObjectType): Error | false | void {
    if (typeof value !== "object") return false;
  }
}
