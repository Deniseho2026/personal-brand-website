import { mkdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const output = path.join(root, "dist-static");
await mkdir(output, { recursive: true });
console.log("Static SPA build prepared without a top-level 404.html so Cloudflare Pages can serve index.html for client-side routes.");
