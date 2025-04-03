import {copy, ensureDir, ensureFile} from '@std/fs';
import {join} from '@std/path';
import {ExtraAssetsConfig} from '../types.ts';
import assets from '../gen/assets.ts';

// When run on macos or isLinux, it sets executable flag on entrypoint.mjs

export async function copyAssets(extraAssets?: ExtraAssetsConfig, outDir = 'dist/') {
	await ensureDir(outDir);

	await Deno.writeFile(join(outDir, '.gitignore'), assets.files['.gitignore'].content, {
		create: true,
	});
	await Deno.writeFile(join(outDir, 'index.mjs'), assets.files['index.mjs'].content, {
		create: true,
	});

	// await Deno.copyFile(`./template/.gitignore`, join(outDir, ".gitignore"));
	// await Deno.copyFile(`./template/index.mjs`, join(outDir, "index.mjs"));

	// copy entrypoint script for resulting cli
	const entrypointPath = join(outDir, 'bin/entrypoint.mjs');
	await ensureFile(entrypointPath);
	await Deno.writeFile(entrypointPath, assets.files['bin/entrypoint.mjs'].content, {create: true});
	if (Deno.build.os !== 'windows') await Deno.chmod(entrypointPath, 0o775);

	if (extraAssets && extraAssets.length > 0) {
		for (const asset of extraAssets) {
			await copy(asset.from, join(outDir, asset.to), {overwrite: true});
		}
	}

	console.info(`Copied assets!`);
}
