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

## Use `asset_builder` from (https://deno.land/x/asset_builder) to have the template folder available to the deno cli.

Run `deno task pack-assets` to pack the files in `/template` into `src-gen/assets.ts`

IMPORTANT: This MUST also be done for the deno variant, otherwise the package will not work when installed from deno.land/x!

### Building the npm package

1. Increase versions:
   1. In `cli.ts` for the bin2npm cli
   2. Of target npm package by updating the version in `./bin2npm.toml`
2. Run `deno task compile`
3. Run `deno task start` and choose the top-level bin2npm.toml => This runs bin2npm on the compiled output of itself! (Great, isn't it?!?)
4. Run `deno task publish-npm` to publish on npm

---

# Changelog

## 0.0.3 - 2023-06-10

- fix missing assets for both deno.land/x and npm, by inlining the assets as base64

## 0.0.2 - 2023-06-10

- fixing stdin of wrapped child processes, was not attached to process.stdin before, so selecting the config to use was not possible!

## 0.0.1 - 2023-06-10

- initial release
