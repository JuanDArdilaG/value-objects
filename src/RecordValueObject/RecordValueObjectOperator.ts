import { IOperable } from "../ValueObject/IOperable";
import { IValueObject } from "../ValueObject/IValueObject";
import { RecordValueObject } from "./RecordValueObject";
import { RecordValueObjectType } from "./RecordValueObjectTyper";

export class RecordValueObjectOperator
  implements IOperable<RecordValueObjectType>
{
  add(
    a: IValueObject<RecordValueObjectType>,
    b: IValueObject<RecordValueObjectType>
  ): IValueObject<RecordValueObjectType> {
    return new RecordValueObject({ ...a.value, ...b.value });
  }
}
