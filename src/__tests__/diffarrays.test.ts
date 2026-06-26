import { describe, it, expect } from "vitest";
import { diffArrays } from "../diffarrays";

describe("diffArrays", () => {
  it("should be a function", () => {
    expect(typeof diffArrays).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => diffArrays(null as any)).toThrow();
  });
});
