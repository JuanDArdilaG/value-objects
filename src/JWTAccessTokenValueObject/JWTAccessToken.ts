import { StringValueObject } from "../StringValueObject/StringValueObject";

export type JWTAccessTokenOptions = {
  expiresIn?: number;
};

export class JWTAccessToken extends StringValueObject {
  private _options: JWTAccessTokenOptions = {};
  constructor(data: string, protected _signed: boolean, expiresIn?: number) {
    super(data);
    if (expiresIn) {
      this._options = { expiresIn: expiresIn };
    }
  }

  static fromJWTString(jwtString: string): JWTAccessToken {
    return new JWTAccessToken(jwtString, true);
  }

  get options(): JWTAccessTokenOptions {
    return this._options;
  }
}
