import { IEncryptable } from "../ValueObject";
import { cipher, util } from "node-forge";

export class StringValueObjectEncrypter implements IEncryptable<string> {
  constructor(private _key: string, private _iv: string) {}

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
