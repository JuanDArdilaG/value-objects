import { IValueObject } from "./IValueObject";
import { StringValueObject } from "./StringValueObject";

export interface IIdentifier extends IValueObject<string> {}

export abstract class Identifier
  extends StringValueObject
  implements IIdentifier {}
