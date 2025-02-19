import { StringValueObject } from "../../src/StringValueObject";
import { describe, it, expect } from "vitest";

describe("StringValueObject", () => {
  it("should be empty", () => {
    const stringVO = StringValueObject.empty();

    expect(stringVO.valueOf()).toBe("");
  });

  it("should convert to string on literal string", () => {
    const stringVO = new StringValueObject("test");

    const str = `${stringVO}`;

    expect(str).toBe("test");
  });
});
