import { copy, ensureFile } from "std/fs/mod.ts";
import { isWindows } from "std/_util/os.ts";
import { join } from "std/path/mod.ts";
import { ExtraAssetsConfig } from "../types.ts";

// When run on macos or isLinux, it sets executable flag on entrypoint.mjs

export async function copyAssets(
  extraAssets?: ExtraAssetsConfig,
  outDir = "dist/",
) {
  await Deno.copyFile(`./template/index.mjs`, join(outDir, "index.mjs"));
  await Deno.copyFile(`./template/.gitignore`, join(outDir, ".gitignore"));

  // copy entrypoint script for resulting cli
  const entrypointPath = join(outDir, "bin/entrypoint.mjs");
  await ensureFile(entrypointPath);
  await Deno.copyFile(`./template/bin/entrypoint.mjs`, entrypointPath);
  if (!isWindows) await Deno.chmod(entrypointPath, 0o775);

  if (extraAssets && extraAssets.length > 0) {
    for (const asset of extraAssets) {
      await copy(asset.path, join(outDir, asset.path), { overwrite: true });
    }
  }

  console.info(`Copied assets!`);
}
