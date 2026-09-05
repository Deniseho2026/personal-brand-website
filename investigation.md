# Content Studio / public publishing investigation

## Findings from the published site

- The published `/writing` page is reading published `contentItems` with `kind = article` and displays the database item titled `test note` with its managed image.
- The published `/writing/test` detail page displays the same managed image and article title correctly.
- A recently created database item with title `A Translation I Treasure` is stored as `kind = work-record`, not `article`. Its image is present in the database and the public homepage Work record flow can use it, but it will not appear in the Writing page or `/writing/{slug}`.
- The recently created work record uses slug `-jung-on-ignatius`, which is technically accepted by the current pattern but is not a clear clean URL.
- There are currently no `journey` rows in the database. The Connected journey fallback therefore remains the starter content until a published Journey story is created.
- The main problem is now confirmed as a mapping/content-type clarity issue, not a general image-storage failure: the public article list/detail path renders a published article image successfully, but content saved under another kind is routed to another public section.

## Required product fix

The Content Studio must use plain-language placement labels such as `Writing article → Writing page and article detail`, `Journey story → Home / A connected journey`, and `Work record → Home / Ways of working`, with per-type guidance explaining where title, short introduction, body, image, display order, and optional link appear.
