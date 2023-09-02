import { StringValueObject } from "../../src/StringValueObject";

describe("StringValueObject", () => {
  it("should be empty", () => {
    const stringVO = StringValueObject.empty();

    expect(stringVO.value).toBe("");
  });

  it("should create a StringVO from other StringVO", () => {
    const stringVO = new StringValueObject("test");

    const stringVO2 = StringValueObject.from(stringVO);

    expect(stringVO2.value).toBe("test");
  });
});
