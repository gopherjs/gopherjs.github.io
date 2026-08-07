import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const outputDirectory = fileURLToPath(new URL("../../docs/", import.meta.url));
const sourceCommit = "490705b1d6fc7d5bd9202ac41888e146183328eb";
const wrongIntroductionEditUrl =
  `https://github.com/gopherjs/gopherjs/edit/${sourceCommit}/introduction.md`;
const correctIntroductionEditUrl =
  "https://github.com/gopherjs/gopherjs.github.io/edit/master/sourcey/introduction.md";

async function collectTextFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectTextFiles(path)));
    } else if (/\.(?:html|json|txt|xml|css|js)$/.test(entry.name)) {
      files.push(path);
    }
  }

  return files;
}

let landingLinkFixes = 0;
let introductionEditFixes = 0;
let normalizedDashes = 0;

for (const file of await collectTextFiles(outputDirectory)) {
  const original = await readFile(file, "utf8");
  const fixed = original
    .replaceAll("api/index.html", "api.html")
    .replaceAll(wrongIntroductionEditUrl, correctIntroductionEditUrl)
    .replaceAll("\u2013", "-")
    .replaceAll("\u2014", "-");

  if (fixed !== original) {
    landingLinkFixes += original.split("api/index.html").length - 1;
    introductionEditFixes +=
      original.split(wrongIntroductionEditUrl).length - 1;
    normalizedDashes += [...original.matchAll(/[\u2013\u2014]/g)].length;
    await writeFile(file, fixed);
  }
}

console.log(`Fixed ${landingLinkFixes} generated API landing-page links.`);
console.log(`Fixed ${introductionEditFixes} introduction edit links.`);
console.log(`Normalized ${normalizedDashes} typographic dashes in public output.`);
