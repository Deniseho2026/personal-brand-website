import { copyFile, mkdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const output = path.join(root, "dist-static");
await mkdir(output, { recursive: true });
await copyFile(path.join(output, "index.html"), path.join(output, "404.html"));
console.log("Static fallback created: dist-static/404.html");
