import { ensureFile } from "std/fs/mod.ts";
import { isWindows } from "std/_util/os.ts";
import { join } from "std/path/mod.ts";

// When run on macos or isLinux, it sets executable flag on entrypoint.mjs

export async function copyAssets(outPath = "dist/") {
  await Deno.copyFile(`./template/index.mjs`, join(outPath, "index.mjs"));

  // copy entrypoint script for resulting cli
  const entrypointPath = join(outPath, "bin/entrypoint.mjs");
  await ensureFile(entrypointPath);
  await Deno.copyFile(`./template/bin/entrypoint.mjs`, entrypointPath);
  if (!isWindows) await Deno.chmod(entrypointPath, 0o775);

  console.info(`Copied assets!`);
}
