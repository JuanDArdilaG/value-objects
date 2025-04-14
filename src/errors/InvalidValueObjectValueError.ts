export class InvalidValueObjectValueError extends Error {
  constructor(vo: string, value: any) {
    super(`invalid value for ${vo} => ${value}`);
  }
}
