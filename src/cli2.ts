import { Confirm, Input, Number, Secret } from "cliffy/prompt";

// import { resolve } from "node:path";
// import { Dirent, existsSync, readdirSync } from "node:fs";
// import { fileTypeFromFile } from "npm:file-type";
// import pMap from "npm:p-map";

intro(`bin2npm`);

const pathToBinaries = await text({
  message: `In which folder are the binaries, which should be wrapped? (Default: '.')`,
  defaultValue: ".",
  validate: (value) => {
    const absolutePath = resolve(value);
    if (!existsSync(absolutePath)) return "The selected folder does not exist!";
  },
});

if (isCancel(pathToBinaries)) {
  cancel("Operation cancelled.");
  process.exit(0);
}

const itemsInFolder = readdirSync(pathToBinaries, {
  withFileTypes: true,
}).filter((item) => !item.isDirectory() && item.path);

console.log(itemsInFolder);

/**
 *
 * @param {Dirent} item
 * @returns
 */
const asyncMapper = async (item) => {
  console.log(item);
  return await fileTypeFromFile(item.path);
};

const fileTypes = await pMap(itemsInFolder, asyncMapper, { concurrency: 2 });

console.log(fileTypes);

// const binariesToAdd = await multiselect({
//   message: "Which binaries should be added?",
//   options: [
//     { value: "eslint", label: "ESLint", hint: "recommended" },
//     { value: "prettier", label: "Prettier" },
//     { value: "gh-action", label: "GitHub Action" },
//   ],
//   required: false,
// });

// handlePossibleCancellation();

// outro(`Finished! Find your new package in the dist folder!`);
outro(`CLI Finished! Go on working...`);
