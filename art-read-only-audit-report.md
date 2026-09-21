# Art Section Read-Only Audit Work Report

**Project:** Denise Ho personal brand website  
**Audit date:** 2026-09-21  
**Audit type:** Read-only architecture and route audit  
**Scope:** Art section, related routes, navigation, legacy Art content, and the 14 uploaded Watercolour images

## Executive conclusion

The current website has a functioning Art parent page at `/art`. The Watercolour gallery is correctly nested beneath that parent at `/art/watercolour`. It is not an unrelated second Art system, and the 14 Watercolour images are correctly referenced by the Watercolour detail page.

However, the older Art page structure that previously displayed artwork entries together with a “Projects & collections” section is no longer the active renderer for `/art`. Its underlying content files still exist in the project, but the current `Art.tsx` renders a newer three-doorway structure instead.

The most accurate diagnosis is therefore:

> **The current doorway-based Art structure is intentional and connected correctly, but it replaced the previously visible artwork-and-projects Art landing structure. The previous data was not deleted; it is still present but is no longer displayed by the active Art page.**

No repair or restoration was performed during this audit.

## 1. Current Art routes

The current application registers four Art-related routes:

| Route | Current component | Function |
|---|---|---|
| `/art` | `client/src/pages/Art.tsx` | Parent Art landing page with three visual doorways |
| `/art/watercolour` | `client/src/pages/ArtDoorwayDetail.tsx` | Watercolour detail page with the 14-work gallery |
| `/art/expressive-arts` | `client/src/pages/ArtDoorwayDetail.tsx` | Expressive Arts doorway detail page |
| `/art/art-in-community` | `client/src/pages/ArtDoorwayDetail.tsx` | Art in Community doorway detail page |

These routes are registered in `client/src/App.tsx`.

## 2. Current parent Art structure

The parent page at `/art` still exists. It is rendered by `client/src/pages/Art.tsx` and currently displays three visual doorways:

1. **Watercolour／水彩**, linking to `/art/watercolour`.
2. **Expressive Arts／表達藝術**, linking to `/art/expressive-arts`.
3. **Art in Community／社群中的藝術**, linking to `/art/art-in-community`.

The parent structure is therefore present and visible. The Watercolour page is a child route beneath it.

## 3. Current navigation

The main website navigation contains one Art entry:

| Navigation label | Destination |
|---|---|
| Art | `/art` |
| 藝術 | `/art` |

The navigation is defined in `client/src/content/site.ts` and is rendered by the shared site header. The detail pages also include a “Back to Art／返回藝術頁” link pointing to `/art`.

The existing site-wide header and mobile menu remain available while viewing the Watercolour gallery.

## 4. Watercolour page connection

The `/art/watercolour` page is not a standalone replacement for the entire Art section. It is a detail page rendered by the shared component `client/src/pages/ArtDoorwayDetail.tsx`.

The component reads the current doorway slug. When the slug is `watercolour`, it renders the `WatercolourGallery` component. The other two doorway routes use the same detail component but currently show their doorway image and a “Content to be added／稍後加入內容” message.

The current structure is:

```text
/art
├── /art/watercolour
├── /art/expressive-arts
└── /art/art-in-community
```

## 5. Location of the 14 Watercolour images

The original uploaded files remain outside the website source tree in:

```text
/home/ubuntu/upload/
```

The website does not import those local upload files directly. Instead, the images were uploaded to managed storage and are referenced through public storage URLs in:

```text
client/src/content/artDoorways.ts
```

The content module contains the `watercolourArtworks` array. Each item stores the English title, managed-storage image URL, and the original image dimensions.

The 14 filename-derived titles are:

```text
Autumn
pussycat
go for adventure
lightfromparadise
solitude
cloud
look up
green
gentleman
road
gentle blue
park
quiet
obsession
```

The titles remain English in both English and Traditional Chinese versions, as instructed.

## 6. Image reference verification

All 14 images are referenced by `watercolourArtworks` in `client/src/content/artDoorways.ts` and rendered by `WatercolourGallery` in `client/src/pages/ArtDoorwayDetail.tsx`.

All 14 managed-storage image URLs were checked. Each returned HTTP 200, so the current references are valid.

The current desktop presentation uses a three-column masonry-style gallery. Titles appear through the hover caption treatment. The mobile presentation displays one artwork at a time, shows the current title and position such as `1 / 14`, and supports previous/next controls together with touch swipe handling.

## 7. What happened to the older Art structure?

The repository baseline contains an earlier Art page implementation in `client/src/pages/Art.tsx`. That version used content imported from `client/src/content/siteContent.ts`, including:

- `initialArtworks` from `client/src/content/artworks.ts`;
- `projects` from `client/src/content/projects.ts`;
- artwork metadata such as year, medium, and description;
- an earlier artwork gallery layout; and
- a “Projects & collections” section.

The current working-tree version of `Art.tsx` no longer imports or renders `initialArtworks` or `projects`. It instead imports `artDoorways` and `artLandingCopy` from `client/src/content/artDoorways.ts`.

Therefore, the previous visible Art landing structure was replaced by the newer doorway-based Art landing structure. The legacy data files were not deleted. They remain in the project, but they are not connected to the active `/art` renderer.

The old related CSS rules also remain in `client/src/index.css`, including rules associated with the earlier gallery and Projects & collections layout. Their presence does not make the old sections visible because the current `Art.tsx` no longer renders the corresponding markup.

## 8. Was anything removed during the recent Watercolour work?

The recent Watercolour work added the 14-image gallery inside the existing doorway detail component. It did not delete the legacy files `artworks.ts` or `projects.ts`.

The larger change from the former artwork-and-projects Art page to the current three-doorway Art page occurred in the earlier doorway refactor. The current Watercolour addition made the Watercolour doorway functional; it did not create a second parent Art route.

In practical terms:

- The old artwork and project data still exists.
- The old visible Art landing renderer is no longer active.
- The new `/art` parent page is active.
- The Watercolour page is correctly connected beneath `/art`.
- No legacy Art content is currently displayed on `/art` unless it is reconnected to the current renderer.

## 9. Simple current structure map

```text
Main navigation
└── Art／藝術 → /art
    ├── Watercolour／水彩 → /art/watercolour
    │   └── 14-work Watercolour gallery
    ├── Expressive Arts／表達藝術 → /art/expressive-arts
    └── Art in Community／社群中的藝術 → /art/art-in-community
```

The relevant current files are:

```text
client/src/App.tsx
client/src/content/site.ts
client/src/content/artDoorways.ts
client/src/pages/Art.tsx
client/src/pages/ArtDoorwayDetail.tsx
client/src/index.css
```

The legacy Art data files are:

```text
client/src/content/artworks.ts
client/src/content/projects.ts
```

## 10. Final classification

### A. The Art structure still exists but is not connected/displayed correctly

This is **partly true only for the older Art structure**. The old artwork-and-projects data and related styles still exist, but the current `/art` page no longer renders them.

### B. The Art structure was replaced by `/art/watercolour`

This is **not accurate**. The entire Art structure was not replaced by `/art/watercolour`. The current parent `/art` page still exists, and `/art/watercolour` is nested beneath it.

### C. The Art structure/content is missing and needs to be restored

This is **not accurate for the current doorway structure**. The current doorway structure is present and working. The older visible Art landing content is not deleted, but it would need to be deliberately reconnected if it is intended to appear again.

### D. Nothing is missing; the current structure is intentional

This is **accurate for the current doorway-based structure**, including the 14-work Watercolour gallery. It is not accurate if the intention is to preserve the older artwork-and-projects Art landing page as well.

## Final diagnosis

The current state is best described as:

> **The former Art landing page was replaced by a newer doorway-based Art parent page. The old artwork and project data remains in the project but is not displayed. The Watercolour gallery is correctly nested under the new `/art` parent and all 14 images are correctly referenced.**

No changes were made during this audit.

## Verification status

The audit was read-only. The following actions were not performed:

- No files were edited.
- No files were deleted, moved, renamed, or regenerated.
- No images were uploaded or replaced.
- No routes were changed.
- No content was restored.
- No checkpoint was created.
- No publication or deployment was performed.

## References

[1]: file:///home/ubuntu/personal-brand-website/client/src/App.tsx "Current route registration"
[2]: file:///home/ubuntu/personal-brand-website/client/src/pages/Art.tsx "Current Art landing page"
[3]: file:///home/ubuntu/personal-brand-website/client/src/pages/ArtDoorwayDetail.tsx "Current Art doorway and Watercolour detail component"
[4]: file:///home/ubuntu/personal-brand-website/client/src/content/artDoorways.ts "Current Art doorway and Watercolour artwork content"
[5]: file:///home/ubuntu/personal-brand-website/client/src/content/artworks.ts "Legacy artwork content"
[6]: file:///home/ubuntu/personal-brand-website/client/src/content/projects.ts "Legacy project content"
[7]: file:///home/ubuntu/personal-brand-website/client/src/content/site.ts "Current site navigation"
