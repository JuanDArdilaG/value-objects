export interface IValidator<T> {
  validate(val: T): Error | boolean;
}
