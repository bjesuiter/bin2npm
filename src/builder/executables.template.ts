import {ensureFile, ensureFileSync} from '@std/fs';
import {join} from '@std/path';
import {BinaryConfig} from '../types.ts';

/**
 * Renders an index file for entrypoint.mjs to be able to look up avaiolable binaries, depending on the platform we're running on.
 * @param config
 * @param outDir
 */
export async function renderExecutables(
	binariesMap: Map<string, Array<BinaryConfig>>,
	basePath: string,
	outDir = 'dist/'
) {
	const executables = Object.fromEntries(
		Array.from(binariesMap.entries()).map(([platformArchKey, binaryArray]) => {
			const currentBin = binaryArray[0];
			return [platformArchKey, currentBin];
		})
	);

	// copy the executables needed
	Object.values(executables).forEach(bin => {
		const binOutPath = join(outDir, 'bin', bin.path);
		ensureFileSync(binOutPath);

		Deno.copyFileSync(join(basePath, bin.path), binOutPath);
		if (Deno.build.os !== 'windows') Deno.chmodSync(binOutPath, 0o775);
	});

	// write the executables.json file
	const outFile = join(outDir, 'bin/executables.json');
	await ensureFile(outFile);
	await Deno.writeTextFile(outFile, JSON.stringify(executables, null, '\t'));

	console.info(`Rendered bin/exectuables.json + copied executables!`);
}
