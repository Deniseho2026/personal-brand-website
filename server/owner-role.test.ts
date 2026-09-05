import { describe, expect, it } from "vitest";
import { resolveUserRole } from "./db";

describe("resolveUserRole", () => {
  it("keeps the configured owner as admin", () => {
    const configuredOwner = process.env.OWNER_OPEN_ID || "owner-open-id";
    expect(resolveUserRole(configuredOwner, "user")).toBe("admin");
  });

  it("preserves an existing admin role during session hydration", () => {
    expect(resolveUserRole("another-open-id", "admin")).toBe("admin");
  });

  it("keeps an ordinary account as a regular user", () => {
    expect(resolveUserRole("another-open-id", "user")).toBe("user");
  });
});
