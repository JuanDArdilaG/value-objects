export interface IValueObject<T extends Object> extends Object {
  value: T;

  validate(): Error | void;

  equalTo(o: IValueObject<T>): boolean;

  toString(): string;
}
