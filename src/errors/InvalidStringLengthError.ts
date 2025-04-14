export class InvalidStringLengthError extends Error {
  constructor(
    str: string,
    options: {
      minLength: number;
      maxLength: number;
    }
  ) {
    super(
      `${str}: Invalid string length. min: ${options.minLength}, max: ${options.maxLength}`
    );
  }
}
