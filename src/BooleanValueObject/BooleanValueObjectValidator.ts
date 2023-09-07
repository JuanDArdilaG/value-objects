import { IValidator } from "../ValueObject/IValidator";

export class BooleanValueObjectValidator implements IValidator<boolean> {
  validate(_: boolean): false | void | Error {}
}
