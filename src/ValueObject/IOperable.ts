import { IEncryptable } from "./IEncryptable";
import { ValueObject } from "./ValueObject";

export interface IOperable<T extends Object> extends IEncryptable<T> {
  add(a: ValueObject<T>, b: ValueObject<T>): ValueObject<T>;
}
