import { describe, it, expect } from "vitest";
import { diffObjects } from "../diffobjects";

describe("diffObjects", () => {
  it("should be a function", () => {
    expect(typeof diffObjects).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => diffObjects(null as any)).toThrow();
  });
});
