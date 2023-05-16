import { EnumValueObject } from "../EnumValueObject";

export abstract class IterableValueObject<
  T extends Object
> extends EnumValueObject<T> {
  protected _values: T[];
  constructor(values: T[], value: T) {
    super(values, value);
    this._values = values;
  }

  get first(): T {
    return this._values[0];
  }

  next(): T {
    const index = this._values.indexOf(this._value);
    if (index === -1) {
      throw new Error("iterable value inválido: " + this._value);
    }
    if (index === this._values.length - 1) {
      throw new Error("no hay siguiente valor");
    }
    this._value = this._values[index + 1];
    return this._value;
  }
}
