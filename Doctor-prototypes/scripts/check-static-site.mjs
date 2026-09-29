import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const requiredFiles = [
  "index.html",
  "script.js",
  "style.css",
  "assets/hosp.svg",
  "assets/doctor.svg",
  "assets/hands.svg",
  "prototypes/shashvat-hospital/index.html",
  "prototypes/astha-hospital/index.html",
  "prototypes/slim-n-slender/index.html"
];

const missing = requiredFiles.filter((file) => !existsSync(resolve(root, file)));
if (missing.length) {
  console.error("Missing required deployment files:");
  missing.forEach((file) => console.error(`- ${file}`));
  process.exit(1);
}

const landingPage = readFileSync(resolve(root, "index.html"), "utf8");
const expectedLinks = [
  "prototypes/shashvat-hospital/",
  "prototypes/astha-hospital/",
  "prototypes/slim-n-slender/",
  "assets/bld1.svg",
  "assets/bld2.svg",
  "assets/bld3.svg"
];
const brokenLinks = expectedLinks.filter((link) => !landingPage.includes(link));
if (brokenLinks.length) {
  console.error("Landing page is missing expected links:");
  brokenLinks.forEach((link) => console.error(`- ${link}`));
  process.exit(1);
}

console.log(`Static site check passed: ${requiredFiles.length} required files and ${expectedLinks.length} links verified.`);
