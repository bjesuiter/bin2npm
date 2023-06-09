#!/usr/bin/env node

import fs from "node:fs/promises";
import { join } from "node:path";
import child_process from "node:child_process";
import { fileURLToPath } from "node:url";

// __dirname points to dist/bin, because it will be calculated as the basepath for dist/bin/entrypoint.mjs
const __dirname = fileURLToPath(new URL(".", import.meta.url));

(async function () {
  // read executables
  const executablesJSON = await fs.readFile(
    join(__dirname, "executables.json")
  );
  const executables = JSON.parse(executablesJSON);

  // executable will be undefined when this property key could not be found :)
  const executable = executables[`${process.platform}-${process.arch}`];

  // Todo: Extend later with issue handling system!
  // const issuesURL = "https://github.com/codemonument/deno-bin-offline/issues";

  if (!executable) {
    const supportedPlatforms = Object.keys(executables).join(", ");
    throw new Error(
      `Your platform (${process.platform}, ${process.arch}) is currently not supported!
      Platforms supported: ${supportedPlatforms}.
      You could go to the github repo of the maintainer of this package and file an issue.`
      // + `You can raise an issue here and ask for support: ${issuesURL}`
    );
  }

  process.exit(0);

  let executablePath = join(
    __dirname,
    executable.platform,
    executable.arch,
    executable.executableName
  );

  if (!fs.existsSync(executablePath))
    throw new Error(`Deno Executable not found at ${executablePath}. Something is wrong with this install.
  Please raise an issue at: ${issuesURL}`);

  const p = child_process.spawnSync(executablePath, process.argv.slice(2), {
    cwd: process.cwd(),
    stdio: "inherit",
    shell: false,
  });

  if (p.error) throw new Error(p.error);
})();
