#!/usr/bin/env node

import fs from 'node:fs/promises';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {execa} from 'execa';
// import {spawnSync} from 'node:child_process';

// __dirname points to dist/bin, because it will be calculated as the basepath for dist/bin/entrypoint.mjs
const __dirname = fileURLToPath(new URL('.', import.meta.url));

(async function () {
	// read executables
	const executablesJSON = await fs.readFile(join(__dirname, 'executables.json'));
	const executables = JSON.parse(executablesJSON);

	// executable will be undefined when this property key could not be found :)
	const executable = executables[`${process.platform}-${process.arch}`];

	// Todo: Extend later with issue handling system!
	// const issuesURL = "https://github.com/codemonument/deno-bin-offline/issues";

	if (!executable) {
		const supportedPlatforms = Object.keys(executables).join(', ');
		throw new Error(
			`Your platform (${process.platform}, ${process.arch}) is currently not supported!
      Platforms supported: ${supportedPlatforms}.
      You could go to the github repo of the maintainer of this package and file an issue.`
			// + `You can raise an issue here and ask for support: ${issuesURL}`
		);
	}

	const executablePath = join(__dirname, executable.path);

	await execa(executablePath, process.argv.slice(2), {
		stdio: 'inherit',
	}).catch(processResult => {
		// we can inspect errorneous process results here
	});

	// if (!fs.existsSync(executablePath))
	// 	throw new Error(`Executable not found at ${executablePath}.
	//   Something is wrong with this install.
	//   Please raise an issue at the github repo of the maintainer of this package.`);

	// const p = spawnSync(executablePath, process.argv.slice(2), {
	// 	cwd: process.cwd(),
	// 	stdio: 'inherit',
	// 	shell: false,
	// });

	// if (p.error) throw new Error(p.error);
})();
