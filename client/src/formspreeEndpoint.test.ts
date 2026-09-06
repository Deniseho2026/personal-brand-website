import { describe, expect, it } from "vitest";

describe("Formspree endpoint configuration", () => {
  it("points to a reachable Formspree form", async () => {
    const endpoint = process.env.VITE_FORMSPREE_ENDPOINT;

    expect(endpoint).toMatch(/^https:\/\/formspree\.io\/f\/[a-z0-9]+$/i);

    const response = await fetch(endpoint!, {
      method: "GET",
      headers: { Accept: "text/html,application/json" },
    });

    expect([401, 403, 404]).not.toContain(response.status);
    expect(response.status).toBeLessThan(500);
  });
});
