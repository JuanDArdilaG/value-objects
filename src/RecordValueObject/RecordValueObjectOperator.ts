import { IOperable } from "../ValueObject/IOperable";
import { RecordValueObject } from "./RecordValueObject";
import { RecordValueObjectType } from "./RecordValueObjectTyper";

export class RecordValueObjectOperator
  implements IOperable<RecordValueObjectType>
{
  add(a: RecordValueObject, b: RecordValueObject): RecordValueObject {
    return new RecordValueObject({ ...a.value, ...b.value });
  }
}
