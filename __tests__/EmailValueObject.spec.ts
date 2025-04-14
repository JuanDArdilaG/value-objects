import { describe, it, expect } from "vitest";
import { EmailValueObject } from "../src/EmailValueObject";
import { InvalidEmailAddressError } from "../src/errors/InvalidEmailAddressError";

describe("EmailValueObject creation", () => {
  it("Should throw an InvalidValueObjectValueError on invalid email", () => {
    const input = "abc";
    const vo = new EmailValueObject(input);

    const validation = vo.validate();

    expect(validation).toBeInstanceOf(InvalidEmailAddressError);
  });
});
