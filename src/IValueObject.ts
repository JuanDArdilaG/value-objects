export interface IValueObject<T extends Object> extends Object {
  value: T;

  validate(): Error | void;

  compareTo(o: IValueObject<T>): number;
  equalTo(o: IValueObject<T>): boolean;

  toString(): string;
}
