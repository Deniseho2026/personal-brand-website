import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";
const root = process.cwd();
const original = execFileSync("git", ["show", "HEAD:client/src/content/siteContent.ts"], { cwd: root, encoding: "utf8" });
const oldPath = "/tmp/siteContent-before-option-b.ts";
writeFileSync(oldPath, original);

const loadWithTsx = (file) => JSON.parse(execFileSync("pnpm", ["exec", "tsx", "-e", `import * as data from ${JSON.stringify(file)}; process.stdout.write(JSON.stringify(data));`], { cwd: root, encoding: "utf8" }));
const current = loadWithTsx(`${root}/client/src/content/index.ts`);
const previous = loadWithTsx(oldPath);
const names = [
  "assetUrls",
  "navigation",
  "siteCopy",
  "journey",
  "workAreas",
  "biography",
  "values",
  "services",
  "initialArticles",
  "initialArtworks",
  "projects",
  "contactDetails",
];

for (const name of names) {
  const before = JSON.stringify(previous[name]);
  const after = JSON.stringify(current[name]);
  if (before !== after) {
    console.error(`Content mismatch: ${name}`);
    process.exit(1);
  }
}

console.log(`Content integrity passed for ${names.length} exports.`);
console.log(`Article slugs: ${current.initialArticles.map(item => item.slug).join(", ")}`);
console.log(`Artwork slugs: ${current.initialArtworks.map(item => item.slug).join(", ")}`);
console.log(`Image URLs unchanged: ${Object.keys(current.assetUrls).join(", ")}`);
