import { IOperable } from "../ValueObject/IOperable";
import { RecordValueObject, RecordValueObjectType } from "./RecordValueObject";

export class RecordValueObjectOperator
  implements IOperable<RecordValueObjectType>
{
  add(a: RecordValueObject, b: RecordValueObject): RecordValueObject {
    return new RecordValueObject({ ...a.value, ...b.value });
  }
}
