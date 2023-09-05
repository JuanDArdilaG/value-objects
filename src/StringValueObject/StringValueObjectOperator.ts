import { BooleanValueObject } from "src/BooleanValueObject";
import { ValueObject } from "src/ValueObject";
import { IOperable } from "../ValueObject/IOperable";
import { StringValueObject } from "./StringValueObject";
import { cipher, util } from "node-forge";
import { NumberValueObject } from "src/NumberValueObject";

export class StringValueObjectOperator implements IOperable<string> {
  constructor(private _key: string, private _iv: string) {}

  add(a: StringValueObject, b: StringValueObject): StringValueObject {
    return new StringValueObject(a.value + b.value);
  }

  equalTo(
    a: ValueObject<string>,
    b: ValueObject<string>
  ): BooleanValueObject<string> {
    return new BooleanValueObject(a.value === b.value);
  }

  differsFrom(
    a: ValueObject<string>,
    b: ValueObject<string>
  ): BooleanValueObject<string> {
    return new BooleanValueObject(a.value !== b.value);
  }

  isBiggerOrEqualThan(
    a: ValueObject<string>,
    b: ValueObject<string>
  ): BooleanValueObject<string> {
    return new BooleanValueObject<string>(a.value > b.value).or(
      this.equalTo(a, b)
    );
  }

  isBiggerThan(
    a: ValueObject<string>,
    b: ValueObject<string>
  ): BooleanValueObject<string> {
    return new BooleanValueObject(a.value > b.value);
  }

  isLessThan(
    a: ValueObject<string>,
    b: ValueObject<string>
  ): BooleanValueObject<string> {
    return new BooleanValueObject(a.value < b.value);
  }

  substract(
    a: ValueObject<string>,
    b: ValueObject<string>
  ): ValueObject<string> {
    return new StringValueObject(a.value.replace(b.value, ""));
  }

  times(times: NumberValueObject, x: StringValueObject): StringValueObject {
    return new StringValueObject(x.value.repeat(times.value));
  }

  async encrypt(val: string): Promise<string> {
    var cipherer = cipher.createCipher("AES-CBC", this._key);

    cipherer.start({ iv: this._iv });
    cipherer.update(util.createBuffer(util.encodeUtf8(val)));
    cipherer.finish();

    return cipherer.output.toString();
  }

  async decrypt(val: string): Promise<string> {
    var decipher = cipher.createDecipher("AES-CBC", this._key);
    decipher.start({ iv: this._iv });
    decipher.update(util.createBuffer(val));
    decipher.finish();

    return decipher.output.toString();
  }
}
