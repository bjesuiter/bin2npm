# bin2npm

A helper cli which takes one or more binaries for different platforms and wraps them into an npm package for distribution.

## Usage 

TODO @bjesuiter

## For Developers of this package

### Building the npm package

1. Run `deno task compile`
2. Run `deno task start` and choose the top-level bin2npm.toml => This runs bin2npm on the compiled output of itself! (Great, isn't it?!?)
3. Run `npm publish ./npm` to publish on npm

---

# Changelog

## 0.0.2 - 2023-06-10

- fixing stdin of wrapped child processes, was not attached to process.stdin before, so selecting the config to use was not possible!

## 0.0.1 - 2023-06-10

- initial release
