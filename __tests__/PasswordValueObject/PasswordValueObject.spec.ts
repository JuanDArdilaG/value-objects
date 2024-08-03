import { PasswordValueObject } from "../../src/PasswordValueObject/PasswordValueObject";

describe("PasswordValueObject creation", () => {
  it("PasswordValueObject.fromRaw should create a PasswordVO correctly", async () => {
    const plainPass = "12345";

    const pass = await PasswordValueObject.fromRaw(plainPass);

    expect(pass.valueOf()).not.toEqual(plainPass);
  });

  it("PasswordValueObject.fromEncrypted should create a PasswordVO correctly", () => {
    const hashedPass = "1234";

    const pass = PasswordValueObject.fromEncrypted(hashedPass);

    expect(pass.valueOf()).toEqual(hashedPass);
  });
});
