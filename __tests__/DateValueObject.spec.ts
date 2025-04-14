import { describe, it, expect } from "vitest";
import { DateValueObject } from "../src/DateValueObject";

describe("DateValueObject", () => {
  it("daysDiff for two dates with one positive day difference", () => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const tomorrow = new DateValueObject(
      new Date(now.getTime() + 24 * 60 * 60 * 1000)
    );

    const diff = tomorrow.daysDiff(new DateValueObject(now));

    expect(diff).toBe(1);
  });

  it("daysDiff for two dates with one negative day difference", () => {
    const now = new DateValueObject(new Date());
    now.setHours(0, 0, 0, 0);
    const yesterday = new DateValueObject(
      new Date(now.getTime() - 24 * 60 * 60 * 1000)
    );

    const diff = yesterday.daysDiff(now);

    expect(diff).toBe(-1);
  });
});
