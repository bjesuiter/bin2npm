import { ensureFile } from "std/fs/mod.ts";
import { isWindows } from "std/_util/os.ts";
import { join } from "std/path/mod.ts";

// When run on macos or isLinux, it sets executable flag on entrypoint.mjs

export async function copyAssets(outPath?: string) {
  if (!outPath) {
    outPath = `dist/`;
  }

  await Deno.copyFile(`./template/index.mjs`, join(outPath, "index.mjs"));

  const entrypointPath = join(outPath, "bin/entrypoint.mjs");
  await ensureFile(entrypointPath);
  await Deno.copyFile(`./template/bin/entrypoint.mjs`, entrypointPath);
  if (!isWindows) await Deno.chmod(entrypointPath, 0o775);

  //   Todo: replace with generated executables.json or executables mjs, since this is a direct transcription from bin2npm config
  //   await Deno.copyFile(
  //     `./template/bin/executables.js`,
  //     `./dist/bin/executables.js`
  //   );

  console.info(`Copied assets!`);
}
