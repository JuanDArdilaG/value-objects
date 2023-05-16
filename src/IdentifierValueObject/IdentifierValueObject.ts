import { IValueObject } from "../ValueObject/IValueObject";
import { StringValueObject } from "../StringValueObject/StringValueObject";

export interface IIdentifier extends IValueObject<string> {}

export abstract class IdentifierValueObject
  extends StringValueObject
  implements IIdentifier {}
