import { describe, expect, it, vi } from "vitest";
import type { TrpcContext } from "./_core/context";

const { submitContactEnquiry } = vi.hoisted(() => ({ submitContactEnquiry: vi.fn() }));

vi.mock("./db", () => ({
  getPublishedContentBySlug: vi.fn(),
  listAllContent: vi.fn(),
  listContactEnquiries: vi.fn(),
  listPublishedContent: vi.fn(),
  listSiteSettings: vi.fn(),
  saveContentItem: vi.fn(),
  saveSiteSetting: vi.fn(),
  submitContactEnquiry,
}));

import { appRouter } from "./routers";

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {} as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("enquiries.submit", () => {
  it("passes a privacy-consented public enquiry to the database helper", async () => {
    submitContactEnquiry.mockResolvedValueOnce(27);
    const caller = appRouter.createCaller(createPublicContext());

    const result = await caller.enquiries.submit({
      name: "A reader",
      email: "reader@example.com",
      phone: "07863 000000",
      enquiryType: "watercolour",
      message: "I would like to ask about a possible watercolour workshop.",
      locale: "en",
      consent: true,
    });

    expect(result).toBe(27);
    expect(submitContactEnquiry).toHaveBeenCalledWith(expect.objectContaining({
      name: "A reader",
      enquiryType: "watercolour",
      consent: true,
    }));
  });

  it("does not submit an enquiry without affirmative consent", async () => {
    const caller = appRouter.createCaller(createPublicContext());

    await expect(caller.enquiries.submit({
      name: "A reader",
      email: "reader@example.com",
      enquiryType: "general",
      message: "I would like to ask about a future workshop offering.",
      locale: "en",
      consent: false,
    } as never)).rejects.toThrow();

    expect(submitContactEnquiry).toHaveBeenCalledTimes(1);
  });
});
