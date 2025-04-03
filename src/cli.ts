import {parseFlags} from '@cliffy/flags';
import {Select} from '@cliffy/prompt';
import {dirname, join} from '@std/path';
import {exists, walk} from '@std/fs';
import {parse} from '@std/toml';
import {Bin2NpmConfig, BinaryConfig} from './types.ts';
import {renderPackageJson} from './builder/package.json.template.ts';
import {renderExecutables} from './builder/executables.template.ts';
import {copyAssets} from './builder/copy-assets.ts';

// Note: This is the version of this bin2npm cli! Do not confuse this with the version of the resulting packages!
const VERSION = '0.0.5';

const {flags} = parseFlags(Deno.args, {
	stopEarly: true,
	flags: [
		{
			name: 'config',
			// aliases: ["hostname"],
			type: 'string',
		},
		{
			name: 'version',
		},
	],
});

if (flags.version) {
	console.log(VERSION);
	Deno.exit(0);
}

let configPath: string;
if (flags.config) {
	// If flags.config is defined, use it directly without searching for a config interactively
	configPath = flags.config;
} else {
	// Find bin2npm.toml config files somewhere below CWD, to let the user select what config to use
	const configsFound = [];
	for await (const dirent of walk('.', {exts: ['.toml'], match: [/bin2npm.toml/]})) {
		configsFound.push(dirent.path);
	}

	if (configsFound.length === 0) {
		console.error(`ERROR: Couldn't find config file 'bin2npm.toml' in '${Deno.cwd}'`);
		Deno.exit();
	}

	// Ask user which config file to use
	configPath = await Select.prompt({
		message: 'Which config do you want to use?',
		options: configsFound.map(path => ({value: path})),
	});
}

// Define base path for naviation relative to toml config
const configBasePath = dirname(configPath);

// Load toml config
const configString = await Deno.readTextFile(configPath);
const rawConfig = parse(configString);

// Validate config
const config = Bin2NpmConfig.parse(rawConfig);

if (!VERSION.startsWith(config.bin2NpmVersion)) {
	console.error(
		`ERROR:
    Config '${configPath}' version: ${config.bin2NpmVersion}
    CLI Version: ${VERSION} 
    The versions are incompatible! Please upgrade your config or the cli!`
	);
	Deno.exit(1);
}

// Stores the configs by key "platform-arch"
const binariesMap = new Map<string, Array<BinaryConfig>>();

for (const bin of config.binaries) {
	const binExists = await exists(join(configBasePath, bin.path));
	if (!binExists) {
		console.error(`ERROR: A binary is configured but could not be found!`, bin);
		Deno.exit(2);
	}

	const binKey = `${bin.platform}-${bin.arch}`;

	// Check existence of platform map
	if (!binariesMap.has(binKey)) {
		binariesMap.set(binKey, []);
	}
	const binConfigArray = binariesMap.get(binKey);
	binConfigArray?.push(bin);

	if ((binConfigArray?.length ?? 0) > 1) {
		console.error(`ERROR: Found multiple binaries for same platform and arch!`, binConfigArray);
		Deno.exit(3);
	}
}

// Log config
console.log(`Using Config:  `, config);

// Assemble the package!
await renderPackageJson(config.targetPackageJson, config.outDir);
await renderExecutables(binariesMap, configBasePath, config.outDir);
await copyAssets(config.extraAssets, config.outDir);
