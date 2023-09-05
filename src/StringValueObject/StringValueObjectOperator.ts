import { IOperable } from "../ValueObject/IOperable";
import { cipher, util } from "node-forge";

export class StringValueObjectOperator implements IOperable<string> {
  constructor(private _key: string, private _iv: string) {}

  add(a: string, b: string): string {
    return a + b;
  }

  equalTo(a: string, b: string): boolean {
    return a === b;
  }

  differsFrom(a: string, b: string): boolean {
    return a !== b;
  }

  isBiggerOrEqualThan(a: string, b: string): boolean {
    return a > b || this.equalTo(a, b);
  }

  isBiggerThan(a: string, b: string): boolean {
    return a > b;
  }

  isLessThan(a: string, b: string): boolean {
    return a < b;
  }

  substract(a: string, b: string): string {
    return a.replace(b, "");
  }

  times(times: number, x: string): string {
    return x.repeat(times);
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
