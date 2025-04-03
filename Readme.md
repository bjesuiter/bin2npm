# bin2npm

A helper cli which takes one or more binaries for different platforms and wraps them into an npm package for distribution.

## Installation via deno

1. Install from deno.land/x (installs exactly this url, so it will always run the latest version of itself!)
   `deno install --allow-read='.' --allow-write='.' -n bin2npm https://deno.land/x/bin2npm/src/cli.ts`

2. Write a config (TODO @bjesuiter)

## Installation via npm

Global Installation: `npm i -g bin2npm`

Local Installation: `npm i -D bin2npm`

## Usage (for both deno & npm)

1. Write a config file (TODO @bjesuiter)
2. Run `bin2npm` => It will search for all bin2npm.toml files inside your CWD
3. Finished! If your config was correct, then your output npm package should be in your configured output dir!

If you have any issues, please open an Issue at:
https://github.com/bjesuiter/bin2npm/issues

## For Developers of this package

Use `asset-builder` from (https://jsr.io/@codemonument/asset-builder) to have the template folder available to the deno cli.
Run `deno task pack-assets` to pack the files in `/template` into `src/gen/assets.ts`
Must be used in the npm AND the deno variant of this package, otherwise this cli will not work when installed from jsr.io!

### Releasing a new version (for deno.land/x and npm)

1. Increase versions:
   1. In `cli.ts` for the bin2npm cli --version command
   2. In `deno.jsonc` for the JSR deployment of this package
   3. Of target npm package by updating the version in `./bin2npm.toml`
   4. In Changelog here at the bottom of the readme
2. Run `deno task pack-assets`
3. Commit all changes
4. Add a new git tag for your new version and push it => will trigger the deploy-npm.yml github workflow + automatically add it to deno.land/x

#### For deploying manually, run

1.  `deno task compile` to compile the deno scripts with the deno executable into self-contained executables
2.  `deno task assemble-npm` => This runs bin2npm on the compiled output of itself! (Great, isn't it?!?)
3.  `deno task publish-npm` to publish on npm

---

# Changelog

## 0.0.4 - 2023-06-10

- First Version built by Github Actions

## 0.0.3 - 2023-06-10

- Fix missing assets for both deno.land/x and npm, by inlining the assets as base64

## 0.0.2 - 2023-06-10

- Fixing stdin of wrapped child processes, was not attached to process.stdin before, so selecting the config to use was not possible!

## 0.0.1 - 2023-06-10

- initial release
