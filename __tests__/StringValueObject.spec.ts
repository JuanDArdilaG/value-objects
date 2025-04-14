import { describe, it, expect } from "vitest";
import { StringValueObject } from "../src/StringValueObject";

describe("StringValueObject", () => {
  it("should be empty", () => {
    const stringVO = StringValueObject.empty();

    expect(stringVO.value).toBe("");
  });
});
