import { describe, expect, it } from "vitest";
import { contactInputSchema, contentInputSchema } from "./routers";

describe("content validation", () => {
  it("accepts a published bilingual artwork with optional presentation data", () => {
    const item = contentInputSchema.parse({
      kind: "artwork",
      slug: "quiet-study",
      titleEn: "Quiet Study",
      titleZh: "靜觀習作",
      imageUrl: "https://example.com/quiet-study.jpg",
      mediumEn: "Watercolour on paper",
      mediumZh: "紙本水彩",
      year: "2026",
      featured: true,
      status: "published",
      sortOrder: 1,
    });

    expect(item.kind).toBe("artwork");
    expect(item.status).toBe("published");
  });

  it("requires meaningful consent and a valid email for an enquiry", () => {
    const result = contactInputSchema.safeParse({
      name: "A reader",
      email: "reader@example.com",
      enquiryType: "general",
      message: "I would like to make an enquiry about a future workshop.",
      locale: "en",
      consent: true,
    });

    expect(result.success).toBe(true);
  });

  it("rejects submissions without consent", () => {
    const result = contactInputSchema.safeParse({
      name: "A reader",
      email: "reader@example.com",
      enquiryType: "general",
      message: "I would like to make an enquiry about a future workshop.",
      locale: "en",
      consent: false,
    });

    expect(result.success).toBe(false);
  });
});
