import { describe, expect, it, vi } from "vitest";
import type { TrpcContext } from "./_core/context";

const { listAllContent } = vi.hoisted(() => ({ listAllContent: vi.fn() }));

vi.mock("./db", () => ({
  getPublishedContentBySlug: vi.fn(),
  listAllContent,
  listContactEnquiries: vi.fn(),
  listPublishedContent: vi.fn(),
  listSiteSettings: vi.fn(),
  saveContentItem: vi.fn(),
  saveSiteSetting: vi.fn(),
  submitContactEnquiry: vi.fn(),
}));

import { appRouter } from "./routers";

function contextWithRole(role: "user" | "admin"): TrpcContext {
  return {
    user: {
      id: role === "admin" ? 1 : 2,
      openId: role === "admin" ? "owner-open-id" : "reader-open-id",
      name: role === "admin" ? "Site Owner" : "Reader",
      email: role === "admin" ? "owner@example.com" : "reader@example.com",
      loginMethod: "manus",
      role,
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    },
    req: {} as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("content.listAll access control", () => {
  it("lets the owner load existing content-library records", async () => {
    const item = { id: 1, kind: "article", slug: "welcome-note", titleEn: "Welcome note" };
    listAllContent.mockResolvedValueOnce([item]);
    const caller = appRouter.createCaller(contextWithRole("admin"));

    await expect(caller.content.listAll()).resolves.toEqual([item]);
  });

  it("blocks a regular authenticated user from the content library", async () => {
    const caller = appRouter.createCaller(contextWithRole("user"));

    await expect(caller.content.listAll()).rejects.toMatchObject({ code: "FORBIDDEN" });
  });
});
