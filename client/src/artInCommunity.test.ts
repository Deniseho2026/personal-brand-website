import { describe, expect, it } from "vitest";
import { artInCommunityCopy } from "./content/artInCommunity";

describe("Art in Community content", () => {
  it("keeps the supplied bilingual paragraphs and photograph order", () => {
    expect(artInCommunityCopy.paragraphs.en).toHaveLength(3);
    expect(artInCommunityCopy.paragraphs.zh).toHaveLength(3);
    expect(artInCommunityCopy.paragraphs.en[0]).toContain("Being part of the Pinner Sketch Club");
    expect(artInCommunityCopy.paragraphs.zh[0]).toContain("參與 Pinner Sketch Club");
    expect(artInCommunityCopy.photos).toHaveLength(7);
    expect(artInCommunityCopy.photos.map(photo => photo.src)).toEqual([
      "https://personalbrnd-eozfgujc.manus.space/manus-storage/IMG_5522_53b9dc25.jpg",
      "https://personalbrnd-eozfgujc.manus.space/manus-storage/IMG_5524_e3fc4457.jpg",
      "https://personalbrnd-eozfgujc.manus.space/manus-storage/IMG_5525_53802473.jpg",
      "https://personalbrnd-eozfgujc.manus.space/manus-storage/IMG_5526_68a9d103.jpg",
      "https://personalbrnd-eozfgujc.manus.space/manus-storage/IMG_5557_78748dba.jpg",
      "https://personalbrnd-eozfgujc.manus.space/manus-storage/IMG_5563_0c3327f8.jpg",
      "https://personalbrnd-eozfgujc.manus.space/manus-storage/IMG_5560_93d20c8d.jpg",
    ]);
  });
});
