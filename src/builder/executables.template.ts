import { isWindows } from "std/_util/os.ts";
import { ensureFile, ensureFileSync } from "std/fs/mod.ts";
import { join } from "std/path/mod.ts";
import { BinaryConfig } from "../types.ts";

/**
 * Renders an index file for entrypoint.mjs to be able to look up avaiolable binaries, depending on the platform we're running on.
 * @param config
 * @param outPath
 */
export async function renderExecutables(
  binariesMap: Map<string, Array<BinaryConfig>>,
  basePath: string,
  outPath = "dist/"
) {
  const executables = Object.fromEntries(
    Array.from(binariesMap.entries()).map(([platformArchKey, binaryArray]) => {
      const currentBin = binaryArray[0];
      return [platformArchKey, currentBin];
    })
  );

  // copy the executables needed
  Object.values(executables).forEach((bin) => {
    const binOutPath = join(outPath, "bin", bin.path);
    ensureFileSync(binOutPath);

    Deno.copyFileSync(join(basePath, bin.path), binOutPath);
    if (!isWindows) Deno.chmodSync(binOutPath, 0o775);
  });

  // write the executables.json file
  const outFile = join(outPath, "bin/executables.json");
  await ensureFile(outFile);
  await Deno.writeTextFile(outFile, JSON.stringify(executables, null, "\t"));

  console.info(`Rendered bin/exectuables.json + copied executables!`);
}
