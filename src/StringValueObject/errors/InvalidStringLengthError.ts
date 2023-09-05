import { StringLengthOptions } from "../StringValueOptions";

export class InvalidStringLengthError extends Error {
  constructor(str: string, options: StringLengthOptions) {
    super(
      `${str}: Invalid string length. min: ${options.minLength}, max: ${options.maxLength}`
    );
  }
}
