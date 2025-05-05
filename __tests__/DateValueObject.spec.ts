import { describe, it, expect } from "vitest";
import { DateValueObject } from "../src/DateValueObject";

describe("daysDiff", () => {
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

describe("updateTime", () => {
  it("updateTime should update time without modifying the orginal date", () => {
    const original = new DateValueObject(new Date(2024, 0, 1));

    const updated = original.updateTime(15, 14, 13, 12);

    expect(updated.value.getHours()).toBe(15);
    expect(updated.value.getMinutes()).toBe(14);
    expect(updated.value.getSeconds()).toBe(13);
    expect(updated.value.getMilliseconds()).toBe(12);
    expect(original.value.getHours()).toBe(0);
    expect(original.value.getMinutes()).toBe(0);
    expect(original.value.getSeconds()).toBe(0);
    expect(original.value.getMilliseconds()).toBe(0);
  });
});
