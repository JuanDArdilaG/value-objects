import { IOperable } from "../ValueObject/IOperable";
import { RecordValueObject, RecordValueObjectType } from "./RecordValueObject";

export class RecordValueObjectOperator
  implements IOperable<RecordValueObjectType>
{
  add(a: RecordValueObject, b: RecordValueObject): RecordValueObject {
    return new RecordValueObject({ ...a.value, ...b.value });
  }

  encrypt(_: RecordValueObjectType): Promise<string> {
    throw new Error("Method not implemented.");
  }

  decrypt(_: string): Promise<RecordValueObjectType> {
    throw new Error("Method not implemented.");
  }
}
