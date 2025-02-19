import { EmailValueObject } from "../../src/EmailValueObject/EmailValueObject";
import { InvalidValueObjectValueError } from "../../src/ValueObject/errors/InvalidValueObjectValueError";
import { describe, it, expect } from "vitest";

describe("EmailValueObject creation", () => {
  it("Should throw an InvalidValueObjectValueError on invalid email", () => {
    const input = "abc";

    expect(() => new EmailValueObject(input)).toThrowError(
      InvalidValueObjectValueError
    );
  });
});
