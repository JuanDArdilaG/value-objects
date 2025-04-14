export class InvalidArgumentError extends Error {
  constructor(argument: string, value: any) {
    super(`<${argument}> does not allow the value <${value}>`);
  }
}
