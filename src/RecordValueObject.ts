import { InvalidArgumentError } from "./errors";
import { IValueObject } from "./IValueObject";

export class RecordValueObject
  extends Object
  implements IValueObject<Record<string, IValueObject<any> | undefined>>
{
  constructor(readonly value: Record<string, IValueObject<any> | undefined>) {
    super();
  }

  validate(): Error | void {
    if (!this.value)
      return new InvalidArgumentError("RecordValueObject", this.value);

    for (const key in this.value) {
      const validation = this.value[key]?.validate();
      if (validation) return validation;
    }
  }

  static empty(): RecordValueObject {
    return new RecordValueObject({});
  }

  compareTo(
    _: IValueObject<Record<string, IValueObject<any> | undefined>>
  ): number {
    throw Error("pending implementation");
  }

  equalTo(
    _: IValueObject<Record<string, IValueObject<any> | undefined>>
  ): boolean {
    throw Error("pending implementation");
  }
}
