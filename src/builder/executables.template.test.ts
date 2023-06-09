import { BinaryConfig } from "../types.ts";
import { renderExecutables } from "./executables.template.ts";

Deno.test(`Test bin/exectuables.json rendering`, () => {
  const binariesMap = new Map<string, Array<BinaryConfig>>();

  binariesMap.set("darwin-x64", [
    {
      path: "macos-executable",
      platform: "darwin",
      arch: "x64",
    },
  ]);

  binariesMap.set("linux-x64", [
    {
      path: "linux-executable",
      platform: "linux",
      arch: "x64",
    },
  ]);

  binariesMap.set("win32-x64", [
    {
      path: "windows-executable.exe",
      platform: "win32",
      arch: "x64",
    },
  ]);

  renderExecutables(binariesMap);
});
