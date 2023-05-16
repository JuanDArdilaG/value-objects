export interface IValidatable<T> {
  validate(val: T): Error | false | void;
}
