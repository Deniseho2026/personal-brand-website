import { describe, expect, it } from "vitest";
import { buildContactPayload } from "./contactForm";

describe("static contact form payload", () => {
  it("preserves enquiry data and adds subject and language metadata", () => {
    const payload = buildContactPayload({
      name: "Reader",
      email: "reader@example.com",
      phone: "",
      enquiryType: "watercolour",
      message: "I would like to ask about a class.",
      consent: true,
    }, "en");

    expect(payload).toMatchObject({
      name: "Reader",
      email: "reader@example.com",
      enquiryType: "watercolour",
      consent: true,
      _subject: "Website enquiry: watercolour",
      _language: "en",
    });
  });
});
