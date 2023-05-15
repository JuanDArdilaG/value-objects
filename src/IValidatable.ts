export interface IValidatable<T> {
  validate(val: T): boolean;
}
