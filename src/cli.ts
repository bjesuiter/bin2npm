import { Input, Select } from "cliffy/prompt";
import { resolve, join, dirname } from "std/path/mod.ts";
import { exists, walk } from "std/fs/mod.ts";
import { parse } from "std/toml/mod.ts";
import { fileTypeFromFile } from "npm:file-type";
import { z } from "zod";
import { Bin2NpmConfig, BinaryConfig } from "./types.ts";

const VERSION = "0.0.1";

// Find bin2npm.toml config files somewhere below CWD
const configsFound = [];
for await (const dirent of walk(".", { exts: [".toml"] })) {
  configsFound.push(dirent.path);
}

if (configsFound.length === 0) {
  console.error(
    `ERROR: Couldn't find config file 'bin2npm.toml' in '${Deno.cwd}'`
  );
  Deno.exit();
}

// Ask user which config file to use
const configPath = await Select.prompt({
  message: "Which config do you want to use?",
  options: configsFound.map((path) => ({ value: path })),
});

// Define base path for naviation relative to toml config
const basePath = dirname(configPath);

// Load toml config
const configString = await Deno.readTextFile(configPath);
const rawConfig = parse(configString);

// Validate config
const config = Bin2NpmConfig.parse(rawConfig);

if (!VERSION.startsWith(config.version)) {
  console.error(
    `ERROR:
    Config '${configPath}' version: ${config.version}
    CLI Version: ${VERSION} 
    The versions are incompatible! Please upgrade your config or the cli!`
  );
  Deno.exit(1);
}

// Stores the configs by platform and arch
const configCounts = new Map<string, Map<string, Array<BinaryConfig>>>();

for (const bin of config.binaries) {
  const binExists = await exists(join(basePath, bin.path));

  if (!binExists) {
    console.error(`ERROR: A binary is configured but could not be found!`, bin);
    Deno.exit(2);
  }

  // Check existence of platform map
  if (!configCounts.has(bin.platform)) {
    configCounts.set(bin.platform, new Map<string, Array<BinaryConfig>>());
  }
  const platformMap = configCounts.get(bin.platform);

  // Check existence of arch map
  if (!platformMap?.has(bin.arch)) {
    platformMap?.set(bin.arch, []);
  }
  const archArray = platformMap?.get(bin.arch);

  archArray?.push(bin);

  if ((archArray?.length ?? 0) > 1) {
    console.error(
      `ERROR: Found multiple binaries for same platform and arch!`,
      archArray
    );
    Deno.exit(3);
  }
}

// Log config
console.log(`Using Config:  `, config);

// const pathToBinaries = await Input.prompt({
//   message: `Where to find the bin2npm.toml config file? (Default: '.')`,
//   default: "bin2npm.toml",
//   hint: "This must be a valid path to an existing folder including bin2npm.toml or to the bin2npm.toml file itself!",
//   validate: async (path) => {
//     const targetStats = await Deno.lstat(path);

//     if (targetStats.isDirectory) {
//       path = join(path, "bin2npm.toml");
//     }

//     return await exists(path, {
//       isFile: true,
//       isReadable: true,
//     });
//   },
// });

// Using maxDepth: 1 to make it simple for now. May be relaxed in the future
// for await (const dirent of walk(pathToBinaries, { maxDepth: 1 })) {
//   if (dirent.isDirectory) continue;
//   const binaryFileType = await fileTypeFromFile(dirent.path);
//   console.log({ dirent, binaryFileType });
// }

// console.log(pathToBinaries);
