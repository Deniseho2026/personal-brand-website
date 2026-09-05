# Denise Ho — Website Design Direction

## Three Possible Directions

### 1. The Quiet Atelier
**Very Brief Intro:** A paper-led, studio-like space where watercolour washes and careful typography frame a reflective personal narrative. It feels composed, warm, and lived-in without becoming decorative.

**Probability:** 0.07

### 2. The Field Notebook
**Very Brief Intro:** A thoughtful editorial journal that layers notes, field markings, and image fragments into an evolving record of psychology, art, and human experience. It favours intimacy and clarity over polish for its own sake.

**Probability:** 0.04

### 3. The Listening Room
**Very Brief Intro:** A calm, architectural experience built around slow reading, restrained colour, and spacious pacing. It introduces the work as different modes of listening—to people, images, and inner life.

**Probability:** 0.09

## Chosen Direction — The Quiet Atelier

### Design Movement
Contemporary editorial design meets Japanese-influenced **wabi-sabi** restraint: quiet asymmetry, honest materials, gentle irregularity, and intentional empty space. The site should feel like entering a bright working studio with a thoughtful library nearby, rather than an institution or sales funnel.

### Core Principles
1. **One integrated practice:** Psychology, counselling, expressive arts, watercolour, teaching, and writing appear as connected paths into the same human concerns.
2. **Calm before persuasion:** The page gives visitors time to read and look, using clear invitations rather than sales language.
3. **Artwork carries the colour:** The interface is reserved enough for paintings and images to hold visual attention.
4. **Editorial care:** Text has generous measure, meaningful hierarchy, and varied pacing so long-form reflection remains welcoming.

### Color Philosophy
Warm paper and linen form a forgiving visual ground; deep ink gives language authority without harsh black; weathered terracotta marks the active thread; muted sage and washed ultramarine surface as watercolour-like notes. Colour appears sparingly as an act of emphasis, allowing real artwork to remain the emotional colour source.

### Layout Paradigm
A **vertical studio table**: each section is a different sheet or arrangement laid along an editorial spine. Hero content occupies a left-weighted column beside a cropped studio portrait; journey points travel on a fine horizontal thread; services behave as “doorways” rather than an equal card grid; writing and art arrive as loose, staggered spreads. Desktop keeps deliberate asymmetry; mobile stacks in a clear, gracious reading order.

### Signature Elements
1. Fine ink rules and small numbered editorial labels to establish a quiet reading rhythm.
2. Soft, irregular watercolour wash panels behind select labels, never as a full-page gradient.
3. Monogram-style brush-and-arch mark, paired with a small “studio note” caption system.

### Interaction Philosophy
Interactions should resemble handling work on a desk: links underline or shift gently, cards lift only slightly, and image overlays reveal concise material information. Navigation is direct, accessible, and always offers a clear way back. Motion is supportive, not performative.

### Animation
On load, only nearby hero elements may fade upward 12px with a 520ms editorial ease and short stagger. Scroll reveals use opacity and small translateY changes only, capped at 500ms. Button press states scale to 0.97 over 140ms; hover transitions stay below 180ms. The site fully respects `prefers-reduced-motion`.

### Typography System
**Cormorant Garamond** provides the English display voice: contemplative but not ornate. **Manrope** carries English body and interface language with composure. **Noto Serif TC** supports Traditional Chinese headlines and longer reflective passages, while **Noto Sans TC** supports labels, controls, and dense Chinese copy. Display hierarchy relies on scale, contrast, and whitespace rather than frequent all-caps.

### Brand Essence
**Denise Ho creates thoughtful spaces where psychology, art, and words help people encounter the texture of their inner lives.**

Personality: **attentive, grounded, discerning**.

### Brand Voice
Headlines are observant and spacious; calls to action are invitations; microcopy is precise and reassuring. Avoid transformation promises, diagnosis, and abstract spiritual language.

Example lines:

> There are many ways of coming closer to ourselves.

> Begin with a conversation, a colour, or a question.

### Wordmark & Logo
A spare **DH** monogram combines a soft brushstroke curve with a narrow architectural arch, suggesting both an interior threshold and a paint mark. The Denise Ho wordmark is set with a custom-feeling, letter-spaced serif treatment—never as a generic sans-serif label.

### Signature Brand Color
**Burnished Sienna — #A6533C**: a warm, earthy red that recalls iron-rich pigment on paper and gives the brand an identifiable, mature point of focus.

## Content and Information Structure

The initial site uses a language-aware content model in `client/src/content/siteContent.ts`. All public-facing words, service metadata, articles, projects, collections, artwork descriptions, contact details, and image references are organised in clearly named English and Traditional Chinese objects. This provides a simple low-code editing path now and a clean migration path to a CMS later.

Core routes are Home, About, My Work, Writing, Art, Services, and Contact. The Home page acts as an introduction and gateway; deeper routes provide the readable long-form information requested in the brief. Counselling and expressive arts offerings carry “Hong Kong only” service labels and avoid claims that imply UK statutory registration.

## Style Decisions

- The English-first and Traditional-Chinese-first content will be written separately where phrasing needs to differ; no automated translation or word-for-word conversion will be used.
- Image tiles will use generated studio and watercolour placeholders with descriptive alt text and a clear replacement path, pending Denise’s own images.
- The contact form will remain a privacy-respecting front-end enquiry form until an email destination or form provider is configured.
