import { IValidator } from "../ValueObject";
import { TPriceValueObject } from "./PriceValueObject";

export class PriceValueObjectValidator
  implements IValidator<TPriceValueObject>
{
  validate(_: TPriceValueObject): false | void | Error {}
}
