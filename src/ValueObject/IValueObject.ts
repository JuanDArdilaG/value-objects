export interface IValueObject<T extends Object> extends Object {
  valueOf(): T;
  is(o: IValueObject<T>): boolean;
}
