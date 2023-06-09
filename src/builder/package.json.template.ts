import { join } from "std/path/mod.ts";
import { ensureFile } from "std/fs/mod.ts";
import { TargetPackageJson } from "../types.ts";

const packageJson = {
  // name, version and description fields will be added from the bin2npm config!
  // 'bin' will also be added from bin2npm config
  // bin: {
  //   "binary-name": "./bin/entrypoint.mjs",
  // },
  name: "",
  version: "",
  description: "",
  bin: {},
  type: "module",
  // Not needded for type module
  // main: "index.js",
  files: [
    // Note: Automatically added files:
    // main script (if applicable), Readme.md, package.json
    "bin",
    "Readme.md",
    "package.json",
    ".gitignore",
  ],
  scripts: {
    start: "node ./bin/entrypoint.mjs",
  },
  dependencies: {
    execa: "^7.1.1",
  },
  devDependencies: {
    "@types/node": "^18.11.9",
  },
  // Note: Not in use right now
  // repository: {
  //   type: "git",
  //   url: "git+https://github.com/codemonument/deno-bin-offline.git",
  // },
  // keywords: ["deno"],
  // author: "Benjamin Jesuiter",
  // license: "MIT",
  // bugs: {
  //   url: "https://github.com/codemonument/deno-bin-offline/issues",
  // },
  // homepage: "https://github.com/codemonument/deno-bin-offline#readme",
};

export async function renderPackageJson(
  config: TargetPackageJson,
  outPath?: string
) {
  if (!outPath) {
    outPath = `dist/`;
  }

  packageJson.name = config.name;
  packageJson.version = config.version;
  packageJson.description = config.description;
  const binEntries =
    config.binAliases?.map((alias) => [alias, "./bin/entrypoint.mjs"]) ?? [];
  binEntries.push([config.name, "./bin/entrypoint.mjs"]);
  packageJson.bin = Object.fromEntries(binEntries);

  const outFile = join(outPath, "package.json");

  await ensureFile(outFile);
  await Deno.writeTextFile(outFile, JSON.stringify(packageJson, null, "\t"));

  console.info(`Rendered package.json!`);
}
