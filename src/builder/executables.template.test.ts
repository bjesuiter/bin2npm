import { resolve } from "std/path/mod.ts";
import { BinaryConfig } from "../types.ts";
import { renderExecutables } from "./executables.template.ts";

Deno.test(`Test bin/exectuables.json rendering`, () => {
  const binariesMap = new Map<string, Array<BinaryConfig>>();

  binariesMap.set("darwin-x64", [
    {
      path: "bonnie-macos-amd64",
      platform: "darwin",
      arch: "x64",
    },
  ]);

  binariesMap.set("linux-x64", [
    {
      path: "bonnie-linux-amd64",
      platform: "linux",
      arch: "x64",
    },
  ]);

  binariesMap.set("win32-x64", [
    {
      path: "bonnie-windows-amd64.exe",
      platform: "win32",
      arch: "x64",
    },
  ]);

  // resolve will resolve from CWD when running the tests, NOT from the location of this test file!
  renderExecutables(binariesMap, resolve("example"));
});
