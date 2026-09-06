# Static deployment guide

This project now has a static-only build path for the public bilingual website. It does not include `/studio`, Manus OAuth, the database, or server-side tRPC procedures in the generated `dist-static` folder. The existing full-stack implementation was preserved in checkpoint `b628d74a` before this conversion.

## Build output

Run:

```bash
pnpm build:static
```

The generated files are written to `dist-static/`. The build also creates `dist-static/404.html`, which lets GitHub Pages fall back to the React router for paths such as `/about`, `/writing`, and `/writing/example`.

## Contact form

The Contact page submits JSON to Formspree. Create a Formspree form for `skyspacehk@gmail.com`, verify the email address, and set the build environment variable:

```text
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
```

The endpoint is intentionally not hardcoded. Until it is configured, the form displays a direct-email fallback message rather than silently losing enquiries. A Formspree endpoint is required for the static form to send email; the email address by itself is not an endpoint.

## GitHub Pages

The included workflow is `.github/workflows/deploy-pages.yml`. It builds with `VITE_BASE_PATH=/${repository-name}/` so a project site can use a repository URL. In GitHub, enable **Settings → Pages → Source: GitHub Actions**. Add `VITE_FORMSPREE_ENDPOINT` as a repository Actions variable or secret before the first deployment. If the site is served from a custom domain at the repository root, set `VITE_BASE_PATH=/` instead.

## Cloudflare Pages

Create a Cloudflare Pages project connected to the repository with:

| Setting | Value |
|---|---|
| Framework preset | Vite |
| Build command | `pnpm build:static` |
| Build output directory | `dist-static` |
| Root directory | `/` |
| Environment variable | `VITE_FORMSPREE_ENDPOINT` |

For Cloudflare Pages, keep `VITE_BASE_PATH=/`. Add the custom domain after the first successful deployment. Cloudflare Pages is the recommended primary static host in this plan; GitHub Pages provides a second public deployment and repository-backed history.

## Content updates after removing Studio

The public content is now frozen in `client/src/content/siteContent.ts`. For future updates, either request a code change and rebuild, or connect a headless CMS and replace the static content module with a public read-only API. A headless CMS is separate from an email-form service: Formspree handles enquiries only and does not manage articles, images, or page copy.
