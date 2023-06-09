import { ensureFile } from "std/fs/mod.ts";
import { join } from "std/path/mod.ts";
import { BinaryConfig } from "../types.ts";

/**
 * Renders an index file for entrypoint.mjs to be able to look up avaiolable binaries, depending on the platform we're running on.
 * @param config
 * @param outPath
 */
export async function renderExecutables(
  binariesMap: Map<string, Array<BinaryConfig>>,
  outPath?: string
) {
  if (!outPath) {
    outPath = `dist/`;
  }

  const executables = Object.fromEntries(
    Array.from(binariesMap.entries()).map(([platformArchKey, binaryArray]) => [
      platformArchKey,
      binaryArray[0],
    ])
  );

  const outFile = join(outPath, "bin/executables.json");

  await ensureFile(outFile);
  await Deno.writeTextFile(outFile, JSON.stringify(executables, null, "\t"));

  console.info(`Rendered bin/exectuables.json!`);
}
