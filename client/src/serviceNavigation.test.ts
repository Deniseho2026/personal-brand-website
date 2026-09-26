import { describe, expect, it } from "vitest";
import { nextServiceId } from "./pages/Services";

describe("My Work service navigation loop", () => {
  it("moves through all five services and returns to Watercolour", () => {
    expect(nextServiceId).toEqual({
      watercolour: "expressive",
      expressive: "talks",
      talks: "counselling",
      counselling: "companionship",
      companionship: "watercolour",
    });
  });
});
